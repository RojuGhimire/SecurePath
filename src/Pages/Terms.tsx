import Header from '@/components/Header'; 
import Footer2 from '@/components/sections/Footer2';
import React from 'react';

const TermsAndConditions: React.FC = () => {
  return (
    <>
    <Header />
    <div className="container mt-28 mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-4">
        Welcome to our application. If you continue to browse and use this application, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Nexus’s relationship with you in relation to this application.
      </p>
      <p className="mb-4">
        If you disagree with any part of these terms and conditions, please do not use our application.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Use of the Application</h2>
      <p className="mb-4">
        The content of the pages of this application is for your general information and use only. It is subject to change without notice.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Governing Law</h2>
      <p className="mb-4">
        Your use of this application and any dispute arising out of such use of the application is subject to the laws of Nepal.
      </p>

      <h2 className="text-2xl font-semibold mb-2">User Responsibilities</h2>
      <p className="mb-4">
        As a user of this application, you agree to use it only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of this site by any third party. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within this application.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Account Security</h2>
      <p className="mb-4">
        You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password. You should take all necessary steps to ensure that the password is kept confidential and secure and should inform us immediately if you have any reason to believe that your password has become known to anyone else, or if the password is being, or is likely to be, used in an unauthorized manner.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Data Accuracy</h2>
      <p className="mb-4">
        The data and information provided on this application are intended for general informational purposes only. While we strive to ensure the accuracy and timeliness of the information presented, we make no guarantees or warranties, express or implied, regarding the completeness, accuracy, reliability, suitability, or availability of any information contained on the site.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Limitation of Liability</h2>
      <p className="mb-4">
        In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this application.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Termination of Use</h2>
      <p className="mb-4">
        We reserve the right to terminate or suspend your access to all or part of the application at any time, without notice, for any conduct that we, in our sole discretion, believe is in violation of any applicable law or is harmful to the interests of another user, a third-party provider, merchant, sponsor, licensor, service provider, or us.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Changes to the Terms</h2>
      <p className="mb-4">
        We may revise these terms and conditions from time to time. Revised terms and conditions will apply to the use of this application from the date of the publication of the revised terms and conditions on this application. Please check this page regularly to ensure you are familiar with the current version.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
      <p className="mb-4">
        If you have any questions about these Terms and Conditions, please contact us at:
      </p>
      <p className="mb-4">
        Email: <a href="mailto:nexus@gmail.com" className="text-blue-600">nexus@gmail.com</a><br />
        Phone: <a href="tel:+9779860000000" className="text-blue-600">9860000000</a><br />
        Address: Kathmandu, Nepal
      </p>
    </div>
    <Footer2 />
    </>
  );
};

export default TermsAndConditions;
