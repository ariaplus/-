import { formatDate } from '@lib/date';
import { HeroIcon } from '@components/ui/hero-icon';
import { ToolTip } from '@components/ui/tooltip';
import { UserName } from './user-name';
import { UserFollowing } from './user-following';
import { UserFollowStats } from './user-follow-stats';
import type { IconName } from '@components/ui/hero-icon';
import type { User } from '@lib/types/user';
import { ArplImage } from '@components/ui/ariaplus';

type UserDetailsProps = Pick<
  User,
  | 'id'
  | 'bio'
  | 'name'
  | 'website'
  
    | 'job'
  |'maritalstatus'

  | 'username'
  | 'location'
  | 'verified'
| 'verifiedred'
| 'verifiedgreen'
| 'verifiedbot'
| 'verifiedcyan'
| 'verifiedgray'
| 'verifiedgold'
| 'verifiedpink'
| 'verifiedviolet'
| 'verifiedwhite'
| 'verifiedapplegreen'
  | 'createdAt'
  | 'following'
  | 'followers'
>;

type DetailIcon = [string | null, IconName];

export function UserDetails({
  id,
  bio,
  name,
  website,

   job,
  maritalstatus,
  
  username,
  location,
  verified,
verifiedred,
verifiedgreen,
verifiedbot,
verifiedcyan,
verifiedgray,
verifiedgold,
verifiedpink,
verifiedviolet,
verifiedwhite,
verifiedapplegreen,
  createdAt,
  following,
  followers
}: UserDetailsProps): JSX.Element {
  const detailIcons: Readonly<DetailIcon[]> = [
    [location, '/assets/ariaplus.svg'],
    [website, '/assets/ariaplus.svg'],
     [job, '/assets/ariaplus.svg'],
   [maritalstatus, '/assets/ariaplus.svg'],
    [`Joined ${formatDate(createdAt, 'joined')}`, '/assets/ariaplus.svg']
  ];

  return (
    <>
      <div>
        <UserName
          className='-mb-1 text-xl'
          name={name}
          iconClassName='w-6 h-6'
          verified={verified}
 verifiedred={verifiedred}
verifiedgreen={verifiedgreen}
verifiedbot={verifiedbot}
verifiedcyan={verifiedcyan}
verifiedgray={verifiedgray}
verifiedgold={verifiedgold}
verifiedpink={verifiedpink}
verifiedviolet={verifiedviolet}
verifiedwhite={verifiedwhite}
verifiedapplegreen={verifiedapplegreen}
        />
        <div className='flex items-center gap-1 text-light-secondary dark:text-dark-secondary'>
          <p>@{username}</p>
          <UserFollowing userTargetId={id} />
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        {bio && <p className='whitespace-pre-line break-words'>{bio}</p>}
        <div className='flex flex-wrap gap-x-3 gap-y-1 text-light-secondary dark:text-dark-secondary'>
          {detailIcons.map(
            ([detail, icon], index) =>
              detail && (
                <div className='flex items-center gap-1' key={icon}>
                  <i>
        <ArplImage
          imgClassName='arplicon'
          blurClassName='none'
          src={icon}
          alt=''
          layout='fill'
          width='25px'
          height='25px'
       />                  </i>
                  {index === 1 ? (
                    <a
                      className='custom-underline text-main-accent'
                      href={`https://${detail}`}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {detail}
                    </a>
                  ) : index === 2 ? (
                    <button className='custom-underline group relative'>
                      {detail}
                      <ToolTip
                        className='translate-y-1'
                        tip={formatDate(createdAt, 'full')}
                      />
                    </button>
                  ) : (
                    <p>{detail}</p>
                  )}
                </div>
              )
          )}
        </div>
      </div>
      <UserFollowStats following={following} followers={followers} />
    </>
  );
}
