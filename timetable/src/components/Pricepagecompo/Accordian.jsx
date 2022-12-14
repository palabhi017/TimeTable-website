import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'
export default function Accordian(){

    return (
        <>
        <h1>Frequently asked questions</h1>
        <Accordion width="60%" margin="auto" allowToggle>
  <AccordionItem >
    <h2>
      <AccordionButton padding="10px" border="none" backgroundColor="white" borderBottom="2px solid #999">
        <Box as="span" flex='1' color="#333" fontSize="23px" textAlign='left'>
        How does Airtable's pricing work?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel fontSize="20px" color="#666" textAlign='left' pb={4}>
    Airtable plans are charged per seat. If you are on Airtable’s Free plan, you can add viewers and commenters to your workspace for free. If you are on a paid Airtable plan, you will be charged for all collaborators who have edit or comment permissions to at least one base in the workspace. No charges will apply for read-only collaborators or people submitting forms. Charges are prorated: collaborators with edit permissions added partway through the month will only be charged for the days they were collaborators.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton padding="10px" border="none" backgroundColor="white" borderBottom="2px solid #999">
        <Box as="span" flex='1'fontSize="23px" textAlign='left'>
        How does Airtable's Enterprise pricing work?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel fontSize="20px" color="#666" textAlign='left' pb={4}>
    pgrades to Airtable Enterprise apply per account within an organization. You will be charged for all collaborators with edit, comment, or read access to at least one base in your organization. An organization has the ability to create unlimited workspaces and bases as part of the enterprise plan. Charges are prorated: collaborators with edit, comment, or read permissions added partway through the billing cycle will only be charged for the months they were collaborators. For more information on our Enterprise plans, contact sales.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton padding="10px" border="none" backgroundColor="white" borderBottom="2px solid #999">
        <Box as="span" flex='1'fontSize="23px" textAlign='left'>
        Is Airtable free to use?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel fontSize="20px" color="#666" textAlign='left' pb={4}>
    Airtable has multiple packages to help teams of all sizes orchestrate their work. Our Free plan is available to teams for no charge and provides the key building blocks to help you build your database. The Free plan is free forever and is formulated for small teams or those with lightweight needs. Our paid plans offer additional power and scale for teams as they grow and their needs get more complex.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton padding="10px" border="none" backgroundColor="white" borderBottom="2px solid #999">
        <Box as="span" flex='1'fontSize="23px" textAlign='left'>
        How much does Airtable cost?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel fontSize="20px" color="#666" textAlign='left' pb={4}>
    Our Free plan is available at no cost for teams just getting started. For teams who like the features of our Free plan but need more storage, our Plus plan is available for $10/user. Our Pro plan costs $20/user and includes the customization and team management features that fast moving teams and organizations need. Our Enterprise plan pricing is custom, based on the organization’s needs and scale with Airtable. To learn more about our Enterprise pricing, contact sales.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton padding="10px" border="none" backgroundColor="white" borderBottom="2px solid #999">
        <Box as="span" flex='1'fontSize="23px" textAlign='left'>
        What are my payment options?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel fontSize="20px" color="#666" textAlign='left' pb={4}>
    All payments are made via credit card for Plus and Pro workspaces. For Enterprise accounts, we can issue an annual invoice with payment via PO and/or ACH, wire, or check. Please contact sales for more information.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton padding="10px" border="none" backgroundColor="white" borderBottom="2px solid #999">
        <Box as="span" flex='1'fontSize="23px" textAlign='left'>
        What happens when I hit my usage limits?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel fontSize="20px" color="#666" textAlign='left' pb={4}>
    If you reach our record or attachment limits, you’ll still be able to use your bases. We’ll let you know about the overage, and give you a grace period to find a plan that fits your needs!
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton padding="10px" border="none" backgroundColor="white" borderBottom="2px solid #999">
        <Box as="span" flex='1'fontSize="23px" textAlign='left'>
        What's an Airtable base?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel fontSize="20px" color="#666" textAlign='left' pb={4}>
    A base is a collection of related tables, often reflecting a single project, process, or workflow that you collaborate on with your team. For example, you could make a base to organize your sales process, with tables for sales leads, companies, and deal opportunities. Each table contains records (similar to rows in a spreadsheet), which represent the individual objects, ideas, or people that you’re tracking. You’re free to create as many bases as you’d like on any of our plans.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton padding="10px" border="none" backgroundColor="white" borderBottom="2px solid #999">
        <Box as="span" flex='1'fontSize="23px" textAlign='left'>
        What is revision history?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel fontSize="20px" color="#666" textAlign='left' pb={4}>
    Airtable provides powerful ways to go back in time with record-level revision history and base snapshots. View a living history of all the changes that have been made to a single record and jump back in time and restore your base to a previous state. We provide a limited history for free plans, with extended histories for our premium plans. When you upgrade and extend your history, all future revisions will be tracked using the upgraded setting.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton padding="10px" border="none" backgroundColor="white" borderBottom="2px solid #999">
        <Box as="span" flex='1'fontSize="23px" textAlign='left'>
        What are the per-base record and attachment limits?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel fontSize="20px" color="#666" textAlign='left' pb={4}>
    While we don’t limit the number of bases you can create, we do limit records and attachment space per base. On the Free plan, we limit the total number of records you can have across all tables in a base. We also limit the total amount of attachment space you can use in a base. You can increase these limits by upgrading to one of our premium plans.
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem border="none">
    <h2>
      <AccordionButton padding="8px" border="none" backgroundColor="white" borderBottom="2px solid #999">
        <Box  as="span" flex='1'fontSize="23px" textAlign='left'>
        What are sync integrations?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel fontSize="20px" color="#666" textAlign='left' pb={4}>
    Sync integrations (previously known as external source sync) let you import data from external sources like Google Calendar, Zendesk, and Box into an Airtable base. Some external sources like Salesforce and Jira count as premium sync integrations and are only available as part of the Pro and Enterprise plans.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
</>
    )
}