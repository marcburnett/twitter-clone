import Link from 'next/link'
import timeago from './../../lib/timeago'
import Image from 'next/image'

export default function Tweet({ tweet, nolink }) {
    return (
      <div className='mb-4'>
        <div className='flex flex-shrink-0 p-4 pb-0'>
          <div className='flex-shrink-0 block'>
            <div className='flex items-center'>
              <div>
                {tweet.author.image && (
                  <Image
                    className='rounded-full'
                    src={tweet.author.image}
                    alt=''
                    width='40'
                    height='40'
                  />
                )}
              </div>
              <div className='ml-3 -mt-6'>
                <p className=''>
                  <Link href={`/${tweet.author.name}`}>
                    <a>
                      <span className='text-base font-medium leading-6 color-primary hover:underline'>
                        {tweet.author.name}
                      </span>
                    </a>
                  </Link>
                  {nolink ? (
                    <span>{timeago.format(new Date(tweet.createdAt))}</span>
                                ) : (
                        <Link href={`/${tweet.author.name}/status/${tweet.id}`}>
                            <a className='hover:underline'>
                            {timeago.format(new Date(tweet.createdAt))}
                            </a>
                        </Link>
                    )}
                  {/* <Link href={`/${tweet.author.name}/status/${tweet.id}`}>
                    <a className='hover:underline'>
                         {timeago.format(new Date(tweet.createdAt))}
                    </a>
                    </Link> */}
                  {/* <span className='pl-1 text-sm font-light leading-5 color-dimmed'>
                    <a className='hover:underline'>
                      {timeago.format(new Date(tweet.createdAt))}
                    </a>
                  </span> */}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='pl-16 -mt-6'>
          <p className='flex-shrink pl-1 pr-2 text-base font-normal color-primary width-auto'>
            {tweet.content}
          </p>
        </div>
      </div>
    )
  }