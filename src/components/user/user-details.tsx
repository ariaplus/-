import { formatDate } from '@lib/date';
import { ToolTip } from '@components/ui/tooltip';
import { UserName } from './user-name';
import { UserFollowing } from './user-following';
import { UserFollowStats } from './user-follow-stats';
import type { User } from '@lib/types/user';
import { ArplImage } from '@components/ui/ariaplus';

type UserDetailsProps = Pick<
  User,
  | 'id'
  | 'bio'
  | 'name'
  | 'website'
  | 'job'
  | 'maritalstatus'
  | 'category'
  | 'highschool'
  | 'college'
  | 'pronoun'
  | 'gender'
  | 'vaccinated'
  | 'bday'
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

type DetailIcon = [string | null, string, string?]; // Icon path and optional tooltip text

export function UserDetails({
  id,
  bio,
  name,
  website,
  job,
  maritalstatus,
  category,
  highschool,
  college,
  pronoun,
  gender,
  vaccinated,
  bday,
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
    [location, '/main/ui/primary/user/ui/location.svg', 'Location'],
    [highschool, '/main/ui/primary/user/ui/school.svg', 'High School'],
    [college, '/main/ui/primary/user/ui/college.svg', 'College'],
    [website, '/main/ui/primary/user/ui/web.svg', 'Website'],
    [gender, '/main/ui/primary/user/ui/gender.svg', 'Gender'],
    [pronoun, '/main/ui/primary/user/ui/pronoun.svg', 'Pronoun'],
    [job, '/main/ui/primary/user/ui/bag.svg', 'Job'],
    [vaccinated, '/main/ui/primary/user/ui/covid.svg', 'Vaccinated'],
    [maritalstatus, '/main/ui/primary/user/ui/blue-heart.svg', 'Marital Status'],
    [bday, '/main/ui/primary/user/ui/cake.svg', 'Birthday'],
    [` ${formatDate(createdAt, 'joined')}`, '/main/ui/primary/user/ui/blue-clock.svg', 'Joined']

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

      <div className='flex flex-col -mt-[12px] gap-2'>
        {bio && <p className='whitespace-pre-line break-words'>{bio}</p>}

        <div className='flex flex-wrap gap-x-3 gap-y-1 text-light-secondary dark:text-dark-secondary'>
          <div className='flex flex-col text-main-accent opacity-100 -mt-[5px]  pt-[4px] -mr-[5px] gap-2'>
            {category && <p className='whitespace-pre-line break-words'>{category}</p>}
          </div>

          {detailIcons.map(([detail, icon, tooltip], index) => detail && (
            <div className='flex items-center gap-1' key={icon}>
              <i>
                <ArplImage
                  imgClassName='arplicon'
                  blurClassName='none'
                  src={icon}
                  alt=''
                  layout='fill'
                  width='20px'
                  height='20px'
                />
              </i>
              {index === 3 ? (
                <a
                  className='custom-underline text-main-accent'
                  href={`https://${detail}`}
                  target='_blank'
                  rel='noreferrer'
                >
                  {detail}
                </a>
              ) : index > 0 && index <= 10 ? (
                <button className='custom-underline group relative'>
                  {detail}
                  <ToolTip
                    className='translate-y-1'
                    tip={tooltip || ''}
                  />
                </button>
              ) : (
                <p>{detail}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      <UserFollowStats following={following} followers={followers} />
    </>
  );
}
