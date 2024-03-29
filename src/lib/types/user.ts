import type { Theme, Accent } from './theme';
import type { Timestamp, FirestoreDataConverter } from 'firebase/firestore';

export type User = {
  id: string;
  bio: string | null;
  name: string;
  theme: Theme | null;
  accent: Accent | null;
  website: string | null;
  job: string | null;
 maritalstatus: string | null;
  location: string | null;

  category: string | null;
  highschool: string | null;
    college: string | null;
  pronoun: string | null;
  gender: string | null;
  vaccinated: string | null;
  bday: string | null;


  username: string;
  photoURL: string;
  verified: boolean;
verifiedred: boolean;
verifiedgreen: boolean;
verifiedbot: boolean;
verifiedcyan: boolean;
verifiedgray: boolean;
verifiedgold: boolean;
verifiedpink: boolean;
verifiedviolet: boolean;
verifiedwhite: boolean;
verifiedapplegreen: boolean;
  following: string[];
  followers: string[];
  createdAt: Timestamp;
  updatedAt: Timestamp | null;
  totalTweets: number;
  totalPhotos: number;
  pinnedTweet: string | null;
  coverPhotoURL: string | null;
};

export type EditableData = Extract<
  keyof User,
  'bio' | 'name' | 'website' | 'job' | 'category' | 'highschool' | 'college' | 'pronoun' | 'gender' | 'vaccinated' | 'bday' |'maritalstatus' | 'photoURL' | 'location' | 'coverPhotoURL'
>;

export type EditableUserData = Pick<User, EditableData>;

export const userConverter: FirestoreDataConverter<User> = {
  toFirestore(user) {
    return { ...user };
  },
  fromFirestore(snapshot, options) {
    const data = snapshot.data(options);
    return { ...data } as User;
  }
};
