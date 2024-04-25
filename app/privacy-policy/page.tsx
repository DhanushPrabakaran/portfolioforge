// pages/privacy-policy.js

import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center ">
      <Head>
        <title>Privacy Policy</title>
        <meta name="description" content="Your website's privacy policy." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-700 mb-4">
          Portfolio Forge our operates the website [https://portfolioforge.vercel.app/] the Service.
        </p>
        <p className="text-gray-700 mb-4">
          This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
        </p>
        <p className="text-gray-700 mb-4">
          We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Information Collection and Use</strong>
        </p>
        <p className="text-gray-700 mb-4">
          We collect several different types of information for various purposes to provide and improve our Service to you.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Types of Data Collected</strong>
        </p>
        <ul className="list-disc ml-8 mb-4">
          <li>Name</li>
          <li>Email Address</li>
          <li>Role</li>
          <li>Other work-related and experience data</li>
        </ul>
        <p className="text-gray-700 mb-4">
          <strong>Method of Collection</strong>
        </p>
        <p className="text-gray-700 mb-4">
          We collect this information through forms available on our website.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Purpose of Collection</strong>
        </p>
        <p className="text-gray-700 mb-4">
          We collect this information to build the user{"'"}s portfolio.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Data Storage</strong>
        </p>
        <p className="text-gray-700 mb-4">
          Your information, including personal data, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction.
        </p>
        <p className="text-gray-700 mb-4">
          We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your personal data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Data Sharing</strong>
        </p>
        <p className="text-gray-700 mb-4">
          We do not share your personal information with third parties.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Data Security</strong>
        </p>
        <p className="text-gray-700 mb-4">
          The security of your data is important to us, but remember that no method of transmission over the Internet,
        </p>
      </div>
    </div>
  );
}
