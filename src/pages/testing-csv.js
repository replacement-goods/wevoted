import React from 'react';
import { graphql } from "gatsby"

class CsvComponent extends React.Component {
  render() {
    const data = this.props.data.allLettersCsv.edges
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Pledge ID</th>
              <th>Referrer</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Shares Earned</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={`${row.node.value} ${i}`}>
                <td>{row.node.pledgeID}</td>
                <td>{row.node.referrer}</td>
                <td>{row.node.name}</td>
                <td>{row.node.amount}</td>
                <td>{Number(row.node.amount.replace(/[^0-9.-]+/g,"")) / 20}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
};

export default CsvComponent;

export const CsvQuery = graphql`
  query {
    allContributionsCsv {
      edges {
        node {
          pledgeID
          referrer
          name
          amount
        }
      }
    }
  }
`