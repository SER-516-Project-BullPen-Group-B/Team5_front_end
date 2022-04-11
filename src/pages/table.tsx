import Nav from "../components/NavBar";
import DropDown from "../components/DropDown";
import './Appt.css';
function Appt() {
  return (
    <div className="Appt">
      <table>
        <tr>
         <th>ID</th>
          <th>User ID</th>
          <th>Task</th>
          <th>Emotion</th>
        </tr>
        <tr>
        <td>1</td>
          <td>arajula</td>
          <td>Mapping the API end points</td>
          <td>😄</td>
        </tr>
        <tr>
        <td>2</td>
          <td>adidesai</td>
          <td>Creating API Gateway</td>
          <td>😞</td>
        </tr>
        <tr>
        <td>3</td>
          <td>mpatthan</td>
          <td>writing docker file</td>
          <td>😡</td>
        </tr>
        <tr>
        <td>4</td>
          <td>gkrish23</td>
          <td>Working on Niko-Niko Metric</td>
          <td>😄</td>
        </tr>
        <tr>
        <td>5</td>
          <td>kkalvakolanu</td>
          <td>Creating a component for active tasks</td>
          <td>😄</td>
        </tr>
        
      </table>
    </div>
  );
}
  
export default Appt;