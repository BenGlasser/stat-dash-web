import React, { useState } from 'react';
import { Table } from 'rsuite';

const { Column, HeaderCell, Cell } = Table

const MatchTable = ({ tableData }) => {
    const [sortColumn, setSortColumn] = useState();
    const [sortType, setSortType] = useState();
    const [loading, setLoading] = useState(false);

    // TODO refetch data on sort
    const getData = () => {
      if (sortColumn && sortType) {
        console.log('sorting', sortColumn, sortType)
        return tableData.sort((a, b) => {
          let x = a[sortColumn];
          let y = b[sortColumn];
          if (typeof x === 'string') {
            x = x.charCodeAt();
          }
          if (typeof y === 'string') {
            y = y.charCodeAt();
          }
          if (sortType === 'asc') {
            return x - y;
          } else {
            return y - x;
          }
        });
      }
      return tableData;
    }


    const handleSortColumn = (sortColumn, sortType) => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setSortColumn(sortColumn);
          setSortType(sortType);
        }, 500);
      };

    return (
        <Table
            fillHeight
            height={400}
            data={getData()}
            sortColumn={sortColumn}
            sortType={sortType}
            onSortColumn={handleSortColumn}
            loading={loading}
            onRowClick={rowData => {
                console.log(rowData);
            }}>
            <Column fixed sortable width={200} align="center" >
                <HeaderCell>Date</HeaderCell>
                <Cell dataKey="gameCreation" />
            </Column>

            <Column  sortable flexgrow minWidth={75} align="right">
                <HeaderCell>Duration</HeaderCell>
                <Cell dataKey="gameDuration" />
            </Column>

            <Column sortable flexGrow minWidth={100} align="center">
                <HeaderCell>Game Mode</HeaderCell>
                <Cell dataKey="gameMode" />
            </Column>

            <Column sortable flexGrow minWidth={100} >
                <HeaderCell>Champion</HeaderCell>
                <Cell dataKey="championName" />
            </Column>

            <Column sortable flexGrow minWidth={100} align="center">
                <HeaderCell>Win/Loss</HeaderCell>
                <Cell dataKey="win" />
            </Column>

            <Column sortable flexGrow minWidth={100} align="center">
                <HeaderCell>Kills</HeaderCell>
                <Cell dataKey="kills" />
            </Column>

            <Column sortable flexGrow minWidth={100} align="center">
                <HeaderCell>Deaths</HeaderCell>
                <Cell dataKey="deaths" />
            </Column>

            <Column sortable flexGrow minWidth={100} align="center"> 
                <HeaderCell>Assists</HeaderCell>
                <Cell dataKey="assists" />
            </Column>

            <Column flexGrow sortable width={100} align="right">
                <HeaderCell>Gold Earned</HeaderCell>
                <Cell dataKey="goldEarned" />
            </Column>

            <Column flexGrow sortable width={50}>
                <HeaderCell>Vision Score</HeaderCell>
                <Cell dataKey="visionScore" />
            </Column>
        </Table>
    );
};

export default MatchTable;
