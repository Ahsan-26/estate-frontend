import React from "react";
import { Box, Heading, Text,  ListItem, Link,UnorderedList } from "@chakra-ui/react";
const Terms = () => {
  return (
    <Box p={8} maxW="1200px" mx="auto" mt={{base: 6, md:14}} boxShadow="md" borderRadius="sm">
    
      <Heading as="h1" fontSize="3xl" fontWeight="bold" mb={4}>
        Terms and Conditions
      </Heading>
      <Text mb={4}>
        Vedarc Infratech Private Ltd. (hereinafter referred to as "EstateOne") operates the website at 
        <Link href="https://estateone.in" color="blue.500" isExternal> https://estateone.in</Link> (“Site”).
        This page contains important information regarding the terms and conditions which apply 
        when you access our website. Please note that the information contained herein is subject 
        to change without notice.
      </Text>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        1. Terms
      </Heading>
      <Text mb={4}>
        By accessing the website at 
        <Link href="https://estateone.in" color="blue.500" isExternal> https://estateone.in</Link>, 
        you are agreeing to be bound by these terms of service, all applicable laws and regulations, 
        and agree that you are responsible for compliance with any applicable local laws. 
        If you do not agree with any of these terms, you are prohibited from using or accessing this site. 
        The materials contained in this website are protected by applicable copyright and trademark law.
      </Text>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        2. Use License
      </Heading>
      <Text mb={4}>
        Permission is granted to temporarily download one copy of the materials (information or 
        software) on the Site for personal, non-commercial transitory viewing only. This is the grant 
        of a license, not a transfer of title, and under this license you may not:
      </Text>

      <UnorderedList pl={6} mb={4}>
        <ListItem>Modify or copy the materials;</ListItem>
        <ListItem>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</ListItem>
        <ListItem>Attempt to decompile or reverse engineer any software contained on EstateOne's website;</ListItem>
        <ListItem>Remove any copyright or other proprietary notations from the materials; or</ListItem>
        <ListItem>Transfer the materials to another person or "mirror" the materials on any other server.</ListItem>
      </UnorderedList>

      <Text mb={4}>
        This license shall automatically terminate if you violate any of these restrictions and may 
        be terminated at any time. Upon terminating your viewing of these materials or upon the 
        termination of this license, you must destroy any downloaded materials in your possession 
        whether in electronic or printed format.
      </Text>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        3. Disclaimer
      </Heading>
      <Text mb={4}>
        The materials on the Site are provided on an 'as is' basis. EstateOne makes no warranties, 
        expressed or implied, and hereby disclaims and negates all other warranties including, 
        without limitation, implied warranties or conditions of merchantability, fitness for a particular 
        purpose, or non-infringement of intellectual property or other violation of rights.
      </Text>
      <Text mb={4}>
        Further, EstateOne does not warrant or make any representations concerning the accuracy, 
        likely results, or reliability of the use of the materials on its website or otherwise relating to 
        such materials or on any sites linked to this site.
      </Text>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        4. Limitations
      </Heading>
      <Text mb={4}>
        In no event shall EstateOne or its suppliers be liable for any damages (including, without 
        limitation, damages for loss of data or profit, or due to business interruption) arising out of 
        the use or inability to use the materials on the Site, even if EstateOne or an EstateOne 
        authorized representative has been notified orally or in writing of the possibility of such 
        damage. Because some jurisdictions do not allow limitations on implied warranties, or 
        limitations of liability for consequential or incidental damages, these limitations may not 
        apply to you.
      </Text>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        5. Accuracy of Materials
      </Heading>
      <Text mb={4}>
        The materials appearing on the Site could include technical, typographical, or photographic 
        errors. EstateOne does not warrant that any of the materials on its website are accurate, 
        complete, or current. EstateOne may make changes to the materials contained on its website 
        at any time without notice. However, EstateOne does not make any commitment to update 
        the materials.
      </Text>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        6. Links
      </Heading>
      <Text mb={4}>
        EstateOne has not reviewed all of the sites linked to its website and is not responsible for 
        the contents of any such linked site. The inclusion of any link does not imply endorsement 
        by EstateOne of the site. Use of any such linked website is at the user's own risk.
      </Text>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        7. Modifications
      </Heading>
      <Text mb={4}>
        EstateOne may revise these terms of service for its website at any time without notice. By 
        using this website, you are agreeing to be bound by the then-current version of these terms of 
        service.
      </Text>

      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mt={6} mb={2}>
        8. Governing Law
      </Heading>
      <Text mb={4}>
        These terms and conditions are governed by and construed in accordance with the laws of 
        Gurgaon, Haryana, and you irrevocably submit to the exclusive jurisdiction of the courts in 
        that State or location.
      </Text>


           </Box>



  );
};










export default Terms;