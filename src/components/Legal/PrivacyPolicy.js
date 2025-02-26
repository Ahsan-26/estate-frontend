import React from "react";
import { Box, Heading, Text, List, ListItem, ListIcon,Link,UnorderedList } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

const PrivacyPolicy = () => {
  return (
    <Box p={8} maxW="1200px" mx="auto" mt={{base: 6, md:14}} boxShadow="md" borderRadius="sm">
      <Heading as="h1" fontSize="3xl" fontWeight="bold" mb={6}mt={4}>
        Privacy Policy
      </Heading>
      <Text mb={4}>
        Vedarc Infratech Private Limited (hereinafter also referred to as “EstateOne” or
        “we” or “our” or “us”) operates the website at (Website link) (“Site” or
        “Platform”). We respect the privacy of each user of the Site (referred to as
        “you” or “a user”), whether it’s your first time, or if you’ve visited our Site
        previously. This Privacy Statement gives you specific information about how we
        protect your privacy, how we treat information we collect on the Site that
        identifies an individual user (“Personal Information”), and how we use aggregated
        information.
      </Text>
      <Text mb={4}>
        By registering for or using the site, you signify your acceptance of this privacy
        statement. If you do not agree to this privacy statement, you cannot use the site.
        We reserve the right to modify this Statement at any time by posting a notice on
        the Site’s home page. (If we consider it appropriate, we may also provide
        additional notice of significant changes.) Your use of the Site after the date of
        the last modification listed at the beginning of this Privacy Statement indicates
        to us that you agree to the changes.
      </Text>
      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        Information Collection and Use
      </Heading>
      <Text mb={4}>
        For a better experience, while using our Service, we may require you to provide us
        with certain personally identifiable information, including but not limited to:
      </Text>
      
      <List spacing={2} mb={4}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          First Name, Last Name, Email/Phone number
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          WhatsApp number (if you wish to use our services via WhatsApp)
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Additional information such as location, age, income (upon advisor request during consultation)
        </ListItem>
      </List>

      <Text mb={4}>
        The information that we request will be retained by us and used as described in this
        privacy policy. Please note that any information collected by us may be shared with
        the relevant EstateOne advisors, the governing body (RERA), or any other service
        provider to enable us to provide you with the relevant Service.
      </Text>

      <Text mb={4}>
        When you use the Website, Apps, Newsletters, and interact with our Services, we may
        use technology such as that provided by Google Analytics, Mailchimp, and other third
        party service providers to collect information about your visit to our Website
        and/or Newsletters. The information we collect may include:
      </Text>

      <List spacing={2} mb={4}>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          The type and version of browser you use to access our website/newsletter
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Number of sessions per day and time spent for each session and on each page
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Time and date of your visit
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Internet Protocol Address
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          The service that you visit
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Device type (e.g., iPhone) and operating system (e.g., iOS)
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Whether you opened our newsletters
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          User preferences
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Pages you visited
        </ListItem>
        <ListItem>
          <ListIcon as={CheckCircleIcon} color="green.500" />
          Information your browser sends when accessing our service
        </ListItem>
      </List>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        THIS IS WHAT WE DO WITH THE INFORMATION WE COLLECT ABOUT YOU
      </Heading>
      
      <UnorderedList spacing={2} mb={4}>
        <ListItem>
          Enable us to provide the services through Call, Email, WhatsApp, SMS, and any other
          digital communication platforms related to the functionalities, product or contracted
          services, including security updates, when required or reasonable for their
          implementation.
        </ListItem>
        
        <ListItem>
          To manage your account and your registration as a user of the service. The personal
          data you provide can give access to various functionalities of the service that are
          available to you as a registered user.
        </ListItem>
        
        <ListItem>
          For internal record-keeping purposes.
        </ListItem>
        
        <ListItem>
          Ensure that content from our Website, Apps, and Newsletters is presented in the most
          effective manner for you and for your device to achieve the most user-friendly
          navigation experience.
        </ListItem>
        
        <ListItem>
          Provide you with marketing information about us and our services.
        </ListItem>
        
        <ListItem>
          To provide you with news, special offers, and general information about other
          product services and events which we offer that are related or similar to those that
          you have already purchased or enquired about unless you have opted not to receive
          such information.
        </ListItem>
        
        <ListItem>
          To manage your request or to offer different products or services and to attend and
          manage your request to us.
        </ListItem>
        
        <ListItem>
          Notify you about changes to the Website, Apps, Newsletters, and the Services.
        </ListItem>
        
        <ListItem>
          Carry out our obligations arising out of the Terms of Use.
        </ListItem>
        
        <ListItem>
          Defend our servers against malicious attacks.
        </ListItem>
        
        <ListItem>
          To process billing and payment, including sharing with third-party payment gateways
          in connection with Website and/or products and Services.
        </ListItem>
        
        <ListItem>
          To improve and maintain our Website and our Services (for example, we track
          information entered through the "Search" function; this helps us determine which
          areas of our Website users like best and areas that we may want to enhance; we also
          will use for trouble-shooting purposes, where applicable).
        </ListItem>
        
        <ListItem>
          To resolve disputes, to protect ourselves and other users of our Website and
          Services, and to enforce our Terms of Use.
        </ListItem>
      </UnorderedList>
      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        Cookies
      </Heading>
      
      <Text mb={4}>
        Cookies are files with a small amount of data that are commonly used as anonymous unique
        identifiers. These are sent to your browser from the websites that you visit and are stored
        on your device's internal memory.
      </Text>
      
      <Text mb={4}>
        This Service does not use these “cookies” explicitly. However, the app or the website may
        use third-party code and libraries that use “cookies” to collect information and improve their
        services. Cookies are widely used to make websites work, or work more efficiently, as well as
        to provide information to the owners of the site. Cookies are typically stored on your
        computer's hard drive. 
      </Text>

      <Text mb={4}>
        Information collected from cookies is used to evaluate the effectiveness of the website, 
        analyse trends and administer any platform. The information collected from cookies allows 
        websites to determine such things as which parts of the website are most visited and what 
        difficulties visitors may experience in accessing the website. 
      </Text>

      <Text mb={4}>
        With this knowledge, service providers can improve the quality of your experience on the 
        platform by recognizing and delivering more of the most desired features and information, 
        as well as by resolving access difficulties. We may also use cookies and/or a technology 
        known as web bugs or clear gifs, which are typically stored in emails to help us confirm your 
        receipt of, and response to, our emails and to provide you with a more personalized experience 
        when using our Site.
      </Text>

      <Text mb={4}>
        You have the option to either accept or refuse these cookies and know when a cookie is 
        being sent to your device. If you choose to refuse our cookies, you may not be able to use 
        some portions of this Service.
      </Text>

      <Heading as="h3" fontSize="xl" fontWeight="semibold" mt={4} mb={2}>
        Third-Party Service Providers
      </Heading>

      <UnorderedList spacing={2} mb={4}>
        <ListItem>To facilitate our Service;</ListItem>
        <ListItem>To provide the Service on our behalf;</ListItem>
        <ListItem>To perform Service-related services; or</ListItem>
        <ListItem>To assist us in analyzing how our Service is used.</ListItem>
      </UnorderedList>

      <Text mb={4}>
        When a user decides to buy the property and fills out an application, the user will be 
        required to fill out forms and provide information. This information may include user name, 
        KYC and other details, etc., however, we do not store any such information collected at 
        such time. This information is passed on to the advisors.
      </Text>

      <Text mb={4}>
        We want to inform users of this Service that these third parties have access to your 
        Personal Information or such other information that we collect about you while you are 
        using the Platform. The reason is to perform the tasks assigned to them on our behalf. 
        However, they are obligated not to disclose or use the information for any other purpose.
      </Text>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
  Third Party Privacy Policies
</Heading>
<Text mb={4}>
  Our privacy policy does not cover and apply to other third-party service providers. Thus, you
  may check with your advisor on the respective privacy policies of these third parties for more
  detailed information. It may include their practices and instructions on how to opt out of
  certain options. You can choose to disable cookies through your individual browser options.
  To know more about cookie management with specific web browsers, it can be found at the
  browser’s respective websites.
</Text>

<Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
  External Links on The Website
</Heading>
<Text mb={4}>
  The platform may include hyperlinks to other websites, content, or resources. We have no
  control over any websites or resources, which are provided by companies or persons
  other than us. You acknowledge and agree that we are not responsible for the availability
  of any such external sites or resources, and do not endorse any advertising, services/products,
  or other materials on or available from such platforms or resources. You acknowledge and agree
  that we are not liable for any loss or damage which may be incurred by you as a result of the
  availability of those external sites or resources, or as a result of any reliance placed by you
  on the completeness, accuracy, or existence of any advertising, products, or other materials
  on, or available from, such websites or resources.
</Text>
<Text mb={4}>
  These external websites and resource providers may have their own privacy policies governing
  the collection, storage, retention, and disclosure of your personal information that you may be
  subject to. We recommend that when you enter such external websites, you review their privacy
  policy. For the avoidance of doubt, we have no control over and assume no responsibility for
  the content, privacy policies, or practices of any third-party sites or services.
</Text>
<Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
  Your Rights in Relation to Your Personal Data
</Heading>
<Text mb={4}>
  We take reasonable steps that are designed to keep your personal data accurate, complete, 
  and up to date for the purpose for which it is collected and used, and to ensure that processing 
  of your personal data complies with applicable laws. Some of the rights which you have in 
  relation to your personal data are mentioned as under:
</Text>

<UnorderedList spacing={3} mb={4} pl={3}>
  <ListItem>
    <strong>Right to Access:</strong> You have the right to request copies of your personal information. 
    We may charge you a small amount of fee for this, if required.
  </ListItem>
  <ListItem>
    <strong>Right to Rectification:</strong> You have the right to request that we correct any information 
    that you believe is incorrect. You also have the right to request that we complete any information 
    that you believe is incomplete.
  </ListItem>
  <ListItem>
    <strong>Right to Edit/Delete:</strong> You have the right to request that your information may be 
    edited or deleted under certain specific situations.
  </ListItem>
  <ListItem>
    <strong>Right to Restrict Processing:</strong> You have the right to request that we restrict the usage 
    of your personal data under certain situations.
  </ListItem>
  <ListItem>
    <strong>Right to Object to Processing:</strong> You have the right to object to our processing of your 
    personal information under certain conditions.
  </ListItem>
  <ListItem>
    <strong>Right to Data Portability:</strong> You have the right to request that we transfer the data that 
    we have collected to another organization or directly to you under certain situations.
  </ListItem>
</UnorderedList>

<Text mb={4}>
  Please make such requests from your registered email ID by writing to us at 
  <Link href="mailto:privacy@estateone.in" color="teal.500">
    privacy@estateone.in
  </Link>. We will respond within 60 working days. Please note that these rights shall 
  always remain subject to regulatory requirements. We, under the RERA and other 
  regulations, are required to store certain information for compliance, audits, and other 
  such purposes. Therefore, the aforementioned rights shall always remain subject to 
  compliance with the relevant laws applicable to us.
</Text>
<Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
  Users
</Heading>
<Text mb={4}>
  If you are coming from the United States of America, the European Union, or any other region 
  with laws governing data collection and use, please note that you are agreeing to the transfer 
  of your information to us and its processing globally. By providing your information, you 
  agree to any transfer or processing in accordance with this privacy policy. The onus of 
  compliance with the requisite laws applicable in a specific country will be on the person 
  accessing our services.
</Text>

<Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
  Retention of Your Personal Data
</Heading>
<Text mb={4}>
  We will retain your personal data only for as long as necessary for the purposes set out in this 
  privacy policy. We will retain and use your personal data only to the extent necessary to:
</Text>

<UnorderedList spacing={3} mb={4} pl={6}>
  <ListItem>Comply with our legal obligations.</ListItem>
  <ListItem>Resolve disputes.</ListItem>
  <ListItem>Enforce our legal agreements and policies.</ListItem>
  <ListItem>Conduct internal analysis purposes.</ListItem>
  <ListItem>
    Enhance security or improve the functionality of our services, if required.
  </ListItem>
  <ListItem>
    Meet any legal obligations to retain data for a longer period.
  </ListItem>
</UnorderedList>

<Text mb={4}>
  Usage data is generally retained for a shorter period unless it is needed to strengthen 
  security or improve our services, or if we are legally required to retain it for a longer period.
</Text>

<Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
  Transfer of Your Personal Data
</Heading>
<Text mb={4}>
  Your information, including personal data, is processed at the company's operating offices 
  and in any other places where the parties involved in the processing of the data are located 
  in Gurgaon. This means the information may be transferred to and maintained on computers 
  located outside of your state, province, country, or government jurisdiction where the data 
  protection laws may differ from those in your jurisdiction.
</Text>

<Text mb={4}>
  Your consent to this privacy policy, followed by your submission of such information, 
  represents your agreement to that transfer. The company will take all steps reasonably 
  necessary to ensure that your data is treated securely and in accordance with this privacy 
  policy. No transfer of your personal data will take place to an organization or a country 
  unless there are adequate controls in place, including the security of your data and personal 
  information.
</Text>
<Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
  Information Disclosed to Protect Us and Others
</Heading>
<Text mb={4}>
  We may disclose your information, including Personal Information, under the following circumstances:
</Text>

<UnorderedList spacing={3} mb={4} pl={3}>
  <ListItem>
    <strong>Compliance with Legal Processes:</strong> If we reasonably believe that disclosure 
    is necessary to comply with a legal process, such as a court order, search warrant, or any 
    other legal requirement from a governmental authority.
  </ListItem>
  <ListItem>
    <strong>Mitigation of Liability:</strong> When disclosure could potentially reduce our liability 
    in an actual or potential lawsuit.
  </ListItem>
  <ListItem>
    <strong>Enforcement of Policies:</strong> If reasonably necessary to enforce this Privacy 
    Policy, our Terms of Use, or other related agreements.
  </ListItem>
  <ListItem>
    <strong>Prevention of Illegal Activities:</strong> When disclosure is intended to help investigate 
    or prevent unauthorized transactions or other illegal activities.
  </ListItem>
  <ListItem>
    <strong>Protection of Rights and Property:</strong> If necessary or appropriate to protect our 
    rights or property, or the rights or property of any person or entity.
  </ListItem>
</UnorderedList>

<Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
  Breach Reporting
</Heading>
<Text mb={4}>
  If you suspect that a personal data breach has occurred due to the theft or exposure of 
  personal data, please notify us immediately at 
  <Link color="blue.500" href="mailto:privacy@estateone.in">privacy@estateone.in</Link> 
  with a detailed description of the incident. 
</Text>
<Text mb={4}>
  We will investigate all reported incidents to determine whether a personal data breach has 
  occurred. If confirmed, we will follow the relevant authorized procedure based on the 
  criticality and quantity of the personal data involved. For severe breaches, our senior 
  management will initiate and lead an emergency response team to manage the response 
  effectively.
</Text>

<Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
  Security
</Heading>
<Text mb={4}>
  We value your trust in providing us with your Personal Information and strive to use 
  commercially acceptable means to protect it. However, please note that no method of 
  transmission over the internet or electronic storage is 100% secure, and we cannot guarantee 
  its absolute security.
</Text>
<Text mb={4}>
  <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
    Children's Privacy
  </Heading>
  Our service does not address anyone under the age of 18. We don't knowingly collect
  personally identifiable information from anyone below the age of 18. If you are parent or 
guardian and you are aware that your child has provided us with the personal data, you may 
please contact us. If we become aware that we have collected personal data from anyone 
under the age of 18 without verification of parental permission, we will take reasonable steps 
to remove that information from our records. 
</Text>
<Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
Changes to This Privacy Policy 
  </Heading>
<Text mb={4}>
We may update our Privacy Policy from time to time. Thus, you are advised to review this 
page periodically for any changes. We will notify you of any changes by posting the new 
Privacy Policy on this page. These changes are effective immediately after they are posted 
on this page. You are advised to review the privacy policy periodically for any changes. 
</Text>

<Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        New Use of Personal Information
      </Heading>
      <Text mb={4}>
        From time to time, we may desire to use personal information for the users not previously
        disclosed in our privacy policy. If our practice changes regarding previously collected
        personal information in a way that would be materially less restrictive than stated in the
        version of this privacy policy in effect at the time we collected the information, we will make
        reasonable efforts to provide notice and obtain consent to any such uses as may be required
        by law.
      </Text>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        Confidentiality
      </Heading>
      <Text mb={4}>
        You further acknowledge that the platform may contain information which is designated
        confidential by us and that you shall not disclose such information without our prior written
        consent.
      </Text>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        Contact Us
      </Heading>
      <Text mb={4}>
        If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact
        us at <Link href="mailto:privacy@estateone.in" color="blue.500">privacy@estateone.in</Link>.
      </Text>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        Liability
      </Heading>
      <Text mb={4}>
        Except as otherwise expressly included in this privacy policy, this document only addresses
        the use and disclosure of information we collect from you. To the extent that you disclose
        your information to other parties, whether they are on our platform or on other sites
        throughout the Internet, different rules may apply to their use or disclosure of the
        information you disclose to them. To the extent that we use third-party advertisers, they
        adhere to their own privacy policies.
      </Text>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        Grievance Team
      </Heading>
      <Text mb={4}>
        In accordance with the Information Technology Act 2000 and rules made thereunder, the
        Consumer Protection (E-Commerce) Rules, 2020, and such other applicable regulations in
        force, the contact details of the Grievance Officer are provided below:
      </Text>

      <Box  p={4} borderRadius="sm" mb={4} boxShadow="md">
        <UnorderedList>
          <ListItem><Text fontWeight="bold">Name:</Text> Hiten Goyal</ListItem>
          <ListItem><Text fontWeight="bold">Address:</Text> Sector 99, Gurgaon</ListItem>
          <ListItem><Text fontWeight="bold">Email:</Text> <Link href="mailto:grievance@estateone.in" color="blue.500">grievance@estateone.in</Link></ListItem>
          <ListItem><Text fontWeight="bold">Phone:</Text> 7015345034</ListItem>
        </UnorderedList>
      </Box>

      </Box>
  );
};

export default PrivacyPolicy;