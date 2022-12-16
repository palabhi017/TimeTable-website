import { CheckIcon, StarIcon } from "@chakra-ui/icons"
import { Button } from "@chakra-ui/react"
export default function PriceTable(){

    return (
        <div style={{marginTop: "140px"}}>
            <table>
  <thead>
    <tr>
      <th>Compare our plans</th>
      <th>Free <br /> <br /> <Button
  size='md'
  height='48px'
  width='150px'
  border='2px'
  borderColor="#333333"
  borderStyle="solid"
  borderRadius="30px"
  fontSize="15px"
  fontWeight="bold"
  marginLeft="10%"
  backgroundColor="white"
>
  Sign up
</Button></th>
      <th>Plus <br /> <br /> <Button
  size='md'
  height='48px'
  width='120px'
  border='2px'
  borderColor="#333333"
  borderStyle="solid"
  borderRadius="30px"
  fontSize="15px"
  fontWeight="bold"

  backgroundColor="white"
>
  Try for free
</Button></th>
      <th>Pro <br /> <br />  <Button
  size='md'
  height='48px'
  width='120px'
  border='2px'
  borderColor="#2d7ff9"
  borderStyle="solid"
  borderRadius="30px"
  fontSize="15px"
  fontWeight="bold"

  backgroundColor="#2d7ff9"
  color="white"
  
>
  Try for free
</Button></th>
      <th>Enterprise <br /> <br /> <Button
  size='md'
  height='48px'
  width='120px'
  border='2px'
  borderColor="#333333"
  borderStyle="solid"
  borderRadius="30px"
  fontSize="15px"
  fontWeight="bold"
  color="black"
  backgroundColor="white"

>
  Try for free
</Button></th>
    </tr>
  </thead>
  {/* <tfoot>
    <tr>
      <th>Footer Cell</th>
      <th>Footer Cell</th>
      <th>Footer Cell</th>
      <th>Footer Cell</th>
      <th>Footer Cell</th>
    </tr>
  </tfoot> */}
  <tbody>
    <tr>
      <th>Fundamentals</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th>Bases</th>
      <td>Unlimited</td>
      <td>Unlimited</td>
      <td>Unlimited</td>
      <td>Unlimited</td>
    </tr>
    <tr>
      <th>Maximum number of users</th>
      <td>5</td>
      <td>Unlimited</td>
      <td>Unlimited</td>
      <td>Unlimited</td>
    </tr>
    <tr>
      <th>Records per base</th>
      <td>1200</td>
      <td>5000</td>
      <td>50000</td>
      <td>250000</td>
    </tr>
    <tr>
      <th>Records per table</th>
      <td>1200</td>
      <td>5000</td>
      <td>50000</td>
      <td>100000</td>
    </tr>
    <tr>
      <th>Attachment space per base</th>
      <td>2GB</td>
      <td>5GB</td>
      <td>50GB</td>
      <td>1000GB</td>
    </tr>
    <tr>
      <th>Revision and snapshot history</th>
      <td>2 Week</td>
      <td>6 month</td>
      <td>1 Year</td>
      <td>3 Year</td>
    </tr>
    <tr>
      <th>Rich field types including attachments, checkboxes, dropdowns, and more</th>
      <td><CheckIcon  color='green.500' /></td>
      <td><CheckIcon  color='green.500' /></td>
      <td><CheckIcon  color='green.500' /></td>
      <td><CheckIcon  color='green.500' /></td>
    </tr>
    <tr>
      <th>Web, desktop, iOS, and Android apps</th>
      <td><CheckIcon  color='green.500' /></td>
      <td><CheckIcon  color='green.500' /></td>
      <td><CheckIcon  color='green.500' /></td>
      <td><CheckIcon  color='green.500' /></td>
    </tr>
    <tr>
      <th>Realtime collaboration and commenting</th>
      <td><CheckIcon  color='green.500' /></td>
      <td><CheckIcon  color='green.500' /></td>
      <td><CheckIcon  color='green.500' /></td>
      <td><CheckIcon  color='green.500' /></td>
    </tr>
    <tr>
      <th></th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th><b>Views</b></th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th>Grid, calendar, form, kanban, and gallery views</th>
      <td><CheckIcon  color='green.500' /></td>
      <td><CheckIcon  color='green.500' /></td>
      <td><CheckIcon  color='green.500' /></td>
      <td><CheckIcon  color='green.500' /></td>
    </tr>
    <tr>
      <th>Gantt view</th>
      <td></td>
      <td></td>
      <td><CheckIcon  color='green.500' /></td>
      <td><CheckIcon  color='green.500' /></td>
    </tr>
    <tr>
      <th>Timeline view</th>
      <td></td>
      <td></td>
      <td><CheckIcon  color='green.500' /></td>
      <td><CheckIcon  color='green.500' /></td>
    </tr>
    <tr>
      <th>Personal and locked views</th>
      <td></td>
      <td></td>
      <td><CheckIcon  color='green.500' /></td>
      <td><CheckIcon  color='green.500' /></td>
    </tr>
    <tr>
      <th>Sections</th>
      <td></td>
      <td></td>
      <td><CheckIcon  color='green.500' /></td>
      <td><CheckIcon  color='green.500' /></td>
    </tr>
    <tr>
      <th>Interface Designer</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th>Design interactive applications with a drag-and-drop experience</th>
      <td><CheckIcon  color='green.500' /></td>
      <td><CheckIcon  color='green.500' /></td>
      <td><CheckIcon  color='green.500' /></td>
      <td><CheckIcon  color='green.500' /></td>
    </tr>
    <tr>
      <th>Granular interface permissions</th>
      <td></td>
      <td></td>
      <td><CheckIcon  color='green.500' /></td>
      <td><CheckIcon  color='green.500' /></td>
    </tr>
    <tr>
      <th>Group level user management and admin panel support</th>
      <td></td>
      <td></td>
      <td></td>
      <td><CheckIcon  color='green.500' /></td>
    </tr>
    <tr>
      <th>Automations</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th>Runs per month</th>
      <td>100</td>
      <td>5,000</td>
      <td>50,000</td>
      <td>500,000</td>
    </tr>
    <tr>
      <th>Run history</th>
      <td>2 Week</td>
      <td>6 month</td>
      <td>1 Year</td>
      <td>3 Year</td>
    </tr>
    <tr>
      <th>Automation integrations</th>
      <td><CheckIcon  color='green.500' /></td>
      <td><CheckIcon  color='green.500' /></td>
      <td><CheckIcon  color='green.500' /></td>
      <td><CheckIcon  color='green.500' /></td>
    </tr>
    <tr>
      <th><StarIcon color="blue" />.   . Jira</th>
      <td></td>
      <td></td>
      <td>Jira Cloud</td>
      <td>Jira Cloud + Server/Data Center</td>
    </tr>
    <tr>
      <th>Sync</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th>Synced tables per base</th>
      <td>1</td>
      <td>1</td>
      <td>10</td>
      <td>20</td>
    </tr>
    <tr>
      <th>Automatic sync</th>
      <td></td>
      <td><CheckIcon  color='green.500' /></td>
      <td><CheckIcon  color='green.500' /></td>
      <td><CheckIcon  color='green.500' /></td>
    </tr>
    <tr>
      <th>Multi-source syncing</th>
      <td></td>
      <td></td>
      <td><CheckIcon  color='green.500' /></td>
      <td><CheckIcon  color='green.500' /></td>
    </tr>
    <tr>
      <th>Sync integrations</th>
      <td>1</td>
      <td>3</td>
      <td>7</td>
      <td>Unlimited</td>
    </tr>


  </tbody>
</table>
<p style={{width:"90%",fontSize:"14px", margin:"auto"}}>* Service levels determined based on spend; customer base trainings and base build services available to qualified customers as set forth on an applicable order form. Services expire if they are not utilized within the contract term.</p>
 </div>
    )
}