// pages/privacy-policy.js

import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <Head>
        <title>Privacy Policy</title>
        <meta name="description" content="Your website's privacy policy." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-lg p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at ligula quis sem dignissim sagittis.
          Vestibulum hendrerit est eu diam pharetra, quis egestas lectus tincidunt. Ut volutpat semper nisi, eu
          tempor nulla mattis at. Suspendisse feugiat pharetra ante, nec commodo libero fermentum nec. Nam eget mi
          nisl.
        </p>
        <p className="text-gray-700 mb-4">
          Vivamus sit amet ligula eu elit vestibulum faucibus ut a dolor. Vivamus sit amet orci in odio ultricies
          vestibulum. Fusce eleifend odio nec nulla suscipit, sit amet hendrerit nisi pharetra. Morbi dignissim
          risus id neque ultrices, id vehicula quam sodales. Duis sed commodo mauris.
        </p>
        <p className="text-gray-700 mb-4">
          Donec quis lacinia tortor, non efficitur est. In hac habitasse platea dictumst. Nunc et magna luctus,
          efficitur mi et, congue enim. Maecenas id eros in magna tempor auctor non vel turpis. Aenean euismod
          justo a nulla auctor, id fringilla metus vehicula.
        </p>
      </div>
    </div>
  );
}
