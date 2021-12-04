import { InfoTile } from "./InfoTile";

const detailsContent =
  "Dump bed trailers for self load. Large object removal service.";

const pricingContent = `Pricing available by weight or volume. Daily or weekly rates are available. Call ${(
  <a href='tel:+1-913-353-5802'>(913)-353-5802</a>
)} or send us an email at ${(
  <a href='mailto:louisburgjunk@gmail.com'>louisburgjunk@gmail.com</a>
)} for more pricing details.`;

export const Body = () => {
  return (
    <div className='flex flex-col items-center w-100'>
      <a href='tel:+1-913-353-5802'>
        <div className='text-white font-title-text text-3xl my-7 opacity-90'>
          (913)-353-5802
        </div>
      </a>
      <InfoTile title='Details' content={detailsContent} />
      <InfoTile title='Pricing' content={pricingContent} />
    </div>
  );
};
