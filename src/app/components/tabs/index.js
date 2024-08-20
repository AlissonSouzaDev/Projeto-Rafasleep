import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import SimpleTable from '../table';

function SimpleTabs() {
  return (
    <Tabs>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
            <SimpleTable />
        </TabPanel>
        <TabPanel>
            <p>Conteúdo da Tab 2</p>
        </TabPanel>
        <TabPanel>
          <p>Conteúdo da Tab 3</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default SimpleTabs;
