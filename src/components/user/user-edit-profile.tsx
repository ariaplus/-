import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import cn from 'clsx';
import { useUser } from '@lib/context/user-context';
import { useModal } from '@lib/hooks/useModal';
import { updateUserData, uploadImages } from '@lib/firebase/utils';
import { sleep } from '@lib/utils';
import { getImagesData } from '@lib/validation';
import { Modal } from '@components/modal/modal';
import { EditProfileModal } from '@components/modal/edit-profile-modal';
import { Button } from '@components/ui/button';
import { InputField } from '@components/input/input-field';
import type { ChangeEvent, KeyboardEvent } from 'react';
import type { FilesWithId } from '@lib/types/file';
import type { User, EditableData, EditableUserData } from '@lib/types/user';
import type { InputFieldProps } from '@components/input/input-field';
import { ArplImage } from '@components/ui/ariaplus';
import { ToolTip } from '@components/ui/tooltip';

type RequiredInputFieldProps = Omit<InputFieldProps, 'handleChange'> & {
  inputId: EditableData;
};

type UserImages = Record<
  Extract<EditableData, 'photoURL' | 'coverPhotoURL'>,
  FilesWithId
>;

type TrimmedTexts = Pick<
  EditableUserData,
  Exclude<EditableData, 'photoURL' | 'coverPhotoURL'>
>;

type UserEditProfileProps = {
  hide?: boolean;
};

export function UserEditProfile({ hide }: UserEditProfileProps): JSX.Element {
  const { user } = useUser();
  const { open, openModal, closeModal } = useModal();

  const [loading, setLoading] = useState(false);

  const { bio, name, website, job, maritalstatus,     category,
    highschool,
    college,
    pronoun,
    gender,
    vaccinated,
    bday, location, photoURL, coverPhotoURL } =
    user as User;

  const [editUserData, setEditUserData] = useState<EditableUserData>({
    bio,
    name,
    website,
    maritalstatus,
    job,
    category,
    highschool,
    college,
    pronoun,
    gender,
    vaccinated,
    bday,
    photoURL,
    location,
    coverPhotoURL
  });

  const [userImages, setUserImages] = useState<UserImages>({
    photoURL: [],
    coverPhotoURL: []
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => cleanImage, []);

  const inputNameError = !editUserData.name?.trim()
    ? "Name can't be blank"
    : '';

  const updateData = async (): Promise<void> => {
    setLoading(true);

    const userId = user?.id as string;

    const { photoURL, coverPhotoURL: coverURL } = userImages;

    const [newPhotoURL, newCoverPhotoURL] = await Promise.all(
      [photoURL, coverURL].map((image) => uploadImages(userId, image))
    );

    const newImages: Partial<Pick<User, 'photoURL' | 'coverPhotoURL'>> = {
      coverPhotoURL:
        coverPhotoURL === editUserData.coverPhotoURL
          ? coverPhotoURL
          : newCoverPhotoURL?.[0].src ?? null,
      ...(newPhotoURL && { photoURL: newPhotoURL[0].src })
    };

    const trimmedKeys: Readonly<EditableData[]> = [
      'name',
      'bio',
      'location',
      'website',
      'maritalstatus',
      'job',
      'category',
      'highschool',
      'college',
      'pronoun',
      'gender',
      'vaccinated',
      'bday'
    ];

    const trimmedTexts = trimmedKeys.reduce(
      (acc, curr) => ({ ...acc, [curr]: editUserData[curr]?.trim() ?? null }),
      {} as TrimmedTexts
    );

    const newUserData: Readonly<EditableUserData> = {
      ...editUserData,
      ...trimmedTexts,
      ...newImages
    };

    await sleep(500);

    await updateUserData(userId, newUserData);

    closeModal();

    cleanImage();

    setLoading(false);
    setEditUserData(newUserData);

    toast.success('Profile updated successfully');
  };

  const editImage =
    (type: 'cover' | 'profile') =>
    ({ target: { files } }: ChangeEvent<HTMLInputElement>): void => {
      const imagesData = getImagesData(files);

      if (!imagesData) {
        toast.error('Please choose a valid GIF or Photo');
        return;
      }

      const { imagesPreviewData, selectedImagesData } = imagesData;

      const targetKey = type === 'cover' ? 'coverPhotoURL' : 'photoURL';
      const newImage = imagesPreviewData[0].src;

      setEditUserData({
        ...editUserData,
        [targetKey]: newImage
      });

      setUserImages({
        ...userImages,
        [targetKey]: selectedImagesData
      });
    };

  const removeCoverImage = (): void => {
    setEditUserData({
      ...editUserData,
      coverPhotoURL: null
    });

    setUserImages({
      ...userImages,
      coverPhotoURL: []
    });

    URL.revokeObjectURL(editUserData.coverPhotoURL ?? '');
  };

  const cleanImage = (): void => {
    const imagesKey: Readonly<Partial<EditableData>[]> = [
      'photoURL',
      'coverPhotoURL'
    ];

    imagesKey.forEach((image) =>
      URL.revokeObjectURL(editUserData[image] ?? '')
    );

    setUserImages({
      photoURL: [],
      coverPhotoURL: []
    });
  };

  const resetUserEditData = (): void =>
    setEditUserData({
      bio,
      name,
      website,
      maritalstatus,
      job,
      category,
      highschool,
      college,
      pronoun,
      gender,
      vaccinated,
      bday,
      photoURL,
      location,
      coverPhotoURL
    });

  const handleChange =
    (key: EditableData) =>
    ({
      target: { value }
    }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setEditUserData({ ...editUserData, [key]: value });

  const handleKeyboardShortcut = ({
    key,
    target,
    ctrlKey
  }: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    if (ctrlKey && key === 'Enter' && !inputNameError) {
      target.blur();
      void updateData();
    }
  };

  const inputFields: Readonly<RequiredInputFieldProps[]> = [
    {
      label: 'Name',
      inputId: 'name',
      inputValue: editUserData.name,
      inputLimit: 50,
      errorMessage: inputNameError
    },
     {
      label: 'Category',
      inputId: 'category',
      inputValue: editUserData.category,
      inputLimit: 15
    },
    {
      label: 'Bio',
      inputId: 'bio',
      inputValue: editUserData.bio,
      inputLimit: 160,
      useTextArea: true
    },
    {
      label: 'Location',
      inputId: 'location',
      inputValue: editUserData.location,
      inputLimit: 30
    },

     {
      label: ' High School',
      inputId: 'highschool',
      inputValue: editUserData.highschool,
      inputLimit: 20
    },
     {
      label: 'College',
      inputId: 'college',
      inputValue: editUserData.college,
      inputLimit: 20
    },
     {
      label: ' Pronoun',
      inputId: 'pronoun',
      inputValue: editUserData.pronoun,
      inputLimit: 20
    },
     {
      label: 'Gender',
      inputId: 'gender',
      inputValue: editUserData.gender,
      inputLimit: 10
    },
     {
      label: 'Vaccinated',
      inputId: 'vaccinated',
      inputValue: editUserData.vaccinated,
      inputLimit: 20
    },
    
    {
      label: 'Occupation',
      inputId: 'job',
      inputValue: editUserData.job,
      inputLimit: 30
    },
    
     {
      label: 'Marital Status',
      inputId: 'maritalstatus',
      inputValue: editUserData.maritalstatus,
      inputLimit: 20
    },
      {
      label: ' Birthday',
      inputId: 'bday',
      inputValue: editUserData.bday,
      inputLimit: 20
    },
    {
      label: 'Website',
      inputId: 'website',
      inputValue: editUserData.website,
      inputLimit: 100
    }
  ];

  return (
    <form className={cn(hide && 'hidden md:block')}>
      <Modal
        modalClassName='relative bg-main-background rounded-2xl max-w-xl w-full h-[570px] overflow-hidden'
        open={open}
        closeModal={closeModal}
      >
        <EditProfileModal
          name={name}
          loading={loading}
          photoURL={editUserData.photoURL}
          coverPhotoURL={editUserData.coverPhotoURL}
          inputNameError={inputNameError}
          editImage={editImage}
          closeModal={closeModal}
          updateData={updateData}
          removeCoverImage={removeCoverImage}
          resetUserEditData={resetUserEditData}
        >
          {inputFields.map((inputData) => (
            <InputField
              {...inputData}
              handleChange={handleChange(inputData.inputId)}
              handleKeyboardShortcut={handleKeyboardShortcut}
              key={inputData.inputId}
            />
          ))}
        </EditProfileModal>
      </Modal>
      <Button
        className='dark-bg-tab group relative p-2 hover:bg-light-primary/10
                   active:bg-light-primary/20 dark:hover:bg-dark-primary/10 
                   dark:active:bg-dark-primary/20'
        onClick={openModal}
      >
        <ArplImage 
          imgClassName='arplicon'
          blurClassName='none'
          src='/main/ui/primary/user/ui/edit-profile.svg'
          alt=''
          layout='fill'
          width='20px'
          height='20px'
       />
        <ToolTip tip='Edit Profile' />
      </Button>
    </form>
  );
}
