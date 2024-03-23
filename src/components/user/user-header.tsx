import { useRouter } from 'next/router';
import { doc } from 'firebase/firestore';
import { AnimatePresence, motion } from 'framer-motion';
import { useDocument } from '@lib/hooks/useDocument';
import { useUser } from '@lib/context/user-context';
import { isPlural } from '@lib/utils';
import { userStatsCollection } from '@lib/firebase/collections';
import { UserName } from './user-name';
import type { Variants } from 'framer-motion';
import { useAuth } from '@lib/context/auth-context';
import { UserEditProfile } from '@components/user/user-edit-profile';

export const variants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

export function UserHeader(): JSX.Element {
  const {
    pathname,
    query: { id }
  } = useRouter(); 
  

  const coverData = userData?.coverPhotoURL
    ? { src: userData.coverPhotoURL, alt: userData.name }
    : null;

  const profileData = userData
    ? { src: userData.photoURL, alt: userData.name }
    : null;
  
    const { user, isAdmin } = useAuth();
const { user: userData, loading } = useUser();


  const userId = user ? user.id : null;

  const isOwner = userData?.id === userId;


  
  const { data: statsData, loading: statsLoading } = useDocument(
    doc(userStatsCollection(userId ?? 'null'), 'stats'),
    {
      allowNull: true,
      disabled: !userId
    }
  );

  const { tweets, likes } = statsData ?? {};

  const [totalTweets, totalPhotos, totalLikes] = [
    (user?.totalTweets ?? 0) + (tweets?.length ?? 0),
    user?.totalPhotos,
    likes?.length
  ];

  const currentPage = pathname.split('/').pop() ?? '';

  const isInTweetPage = ['[id]', 'with_replies'].includes(currentPage);
  const isInFollowPage = ['following', 'followers'].includes(currentPage);

  return (
    <AnimatePresence mode='popLayout'>
      {loading || statsLoading ? (
        <motion.div
          className='-mb-1 inner:animate-pulse inner:rounded-lg 
                     inner:bg-light-secondary dark:inner:bg-dark-secondary'
          {...variants}
          key='loading'
        >
          <div className='mb-1 -mt-1 h-5 w-24' />
          <div className='h-4 w-12' />
        </motion.div>
      ) : !user ? (
        <motion.h2 className='text-xl font-bold' {...variants} key='not-found'>
          {isInFollowPage ? `@${id as string}` : 'User'}
        </motion.h2>
      ) : (
        <motion.div className='-mb-1 truncate' {...variants} key='found'>
          <UserName
            tag='h2'
            name={user.name}
            className='-mt-1 text-xl'
            iconClassName='w-6 h-6'
            verified={user.verified}
verifiedred={user.verifiedred}
verifiedgreen={user.verifiedgreen}
verifiedbot={user.verifiedbot}
verifiedcyan={user.verifiedcyan}
verifiedgray={user.verifiedgray}
verifiedgold={user.verifiedgold}
verifiedpink={user.verifiedpink}
verifiedviolet={user.verifiedviolet}
verifiedwhite={user.verifiedwhite}
verifiedapplegreen={user.verifiedapplegreen}
          />
          <p className='text-xs text-light-secondary dark:text-dark-secondary'>
            {isInFollowPage
              ? `@${user.username}`
              : isInTweetPage
              ? totalTweets
                ? `${totalTweets} ${`+${isPlural(totalTweets)}`}`
                : "No +'s"
              : currentPage === 'media'
              ? totalPhotos
                ? `${totalPhotos} Photo${isPlural(totalPhotos)} & GIF${isPlural(
                    totalPhotos
                  )}`
                : 'No Photo & GIF'
              : totalLikes
              ? `${totalLikes} Like${isPlural(totalLikes)}`
              : 'No Like'}
          </p>
 
        </motion.div>
      
               {isOwner ? (
                  <div className='flex items-end gap-2'>
                    <div className='items-end'>
                      <UserEditProfile />
                    </div>
                   
                )}



      
      )}
    </AnimatePresence>
  );
}
