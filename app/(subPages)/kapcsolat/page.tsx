import { getContactPageDetails } from '@/lib/helpers';
import SubPageFrame from '@/app/(subPages)/SubPageFrame';

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const passwordInLink = (await searchParams).p ?? '';
  const pageData = await getContactPageDetails(passwordInLink.toString());

  return (
    <SubPageFrame title={'Kapcsolat'}>
      <section className='mx-auto max-w-[1440px]'>
        <div
          className={
            'mx-auto my-6 flex max-w-[800px] flex-col gap-4 md:flex-row md:gap-0 lg:mt-16'
          }
        >
          <ContactBlock
            title={'Koncertszervezés:'}
            contact={{
              email: pageData.general.concert_contact_email,
              name: pageData.general.concert_contact_name,
              phone: pageData.general.concert_contact_phone,
            }}
          />
          <ContactBlock
            title={'Turné menedzsment:'}
            contact={{
              email: pageData.general.tour_contact_email,
              name: pageData.general.tour_contact_name,
              phone: pageData.general.tour_contact_phone,
            }}
          />
        </div>
        <div>
          <p
            className={
              'text-md mb-4text-center mx-auto mb-4 mt-12 flex max-w-max flex-col gap-2'
            }
          >
            <a
              className={'text-xs underline md:text-lg'}
              href={pageData.general.presskit_link}
              target={'_blank'}
            >
              Sajtóanyag 🗞
            </a>
            {!!pageData.secret_docs &&
              pageData.secret_docs.map((secretLink) => (
                <a
                  key={secretLink.display_name}
                  target={'_blank'}
                  href={secretLink.signed_url}
                  className={'text-xs underline md:text-lg'}
                >
                  {secretLink.display_name}
                </a>
              ))}
          </p>
        </div>
      </section>
    </SubPageFrame>
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
      <h2 className={'text-center text-lg font-bold md:text-2xl'}>{title}</h2>
      <p className={'text-center text-xs md:text-lg'}>{contact.name}</p>
      <p className={'text-center text-xs md:text-lg'}>
        <b>Email:</b>{' '}
        <a className={'underline'} href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
      </p>
      <p className={'text-center text-xs md:text-lg'}>
        <b>Tel:</b>{' '}
        <a className={'underline'} href={`tel:${contact.phone}`}>
          {contact.phone}
        </a>
      </p>
    </div>
  );
};
