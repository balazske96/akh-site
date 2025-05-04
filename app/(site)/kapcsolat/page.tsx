import { getContactPageDetails } from '@/lib/helpers';

export default async function ContactPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const passwordInLink = searchParams.p ?? '';
  const pageData = await getContactPageDetails();
  const shouldRenderSecretLinks =
    pageData.secretLinksPassword === passwordInLink;

  return (
    <section className='font-martian'>
      <div className='mx-auto max-w-[1440px]'>
        <h1
          className={
            'pb-5 pt-7 text-center font-martian text-3xl font-bold uppercase md:py-6 md:text-4xl lg:py-9 lg:text-5xl'
          }
        >
          Kapcsolat
        </h1>
        <div className={'my-6 flex flex-col'}>
          <ContactBlock
            title={'Koncertszervezés:'}
            contact={pageData.tourContact}
          />
          <ContactBlock
            title={'Turné menedzsment:'}
            contact={pageData.concertContact}
          />
        </div>
        <div>
          <p className={'text-md mb-4 text-center'}>
            <a
              className={'underline'}
              href={pageData.pressKitLink}
              target={'_blank'}
            >
              Sajtóanyag 🗞
            </a>
            ️
          </p>
        </div>
        <ul
          className={
            'flex list-disc flex-col items-center gap-1 py-8 underline'
          }
        >
          {shouldRenderSecretLinks &&
            pageData.secretLinks.map((secretLink) => (
              <li key={secretLink.link}>
                <a target={'_blank'} href={secretLink.link}>
                  {secretLink.display}
                </a>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

const ContactBlock = ({
  contact,
  title,
}: {
  contact: IContactInfo;
  title: string;
}) => {
  return (
    <div
      className={'mx-auto my-2 flex flex-col items-center gap-1 font-martian'}
    >
      <h2 className={'text-center text-lg font-bold'}>{title}</h2>
      <p className={'text-center text-xs'}>{contact.name}</p>
      <p className={'text-center text-xs'}>
        <b>Email:</b>{' '}
        <a className={'underline'} href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
      </p>
      <p className={'text-center text-xs'}>
        <b>Tel:</b>{' '}
        <a className={'underline'} href={`tel:${contact.phone}`}>
          {contact.phone}
        </a>
      </p>
    </div>
  );
};
