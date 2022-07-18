import styled from 'styled-components'
import { TabList, Tabs, TabPanel, Tab } from 'react-tabs'

export const WrapperTab = styled(Tab)`
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 8px;
  user-select: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &.is-selected {
    border-bottom: 1px solid white;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
`
WrapperTab.tabsRole = 'Tab'

export const WrapperTabs = styled(Tabs)`
  font-size: 1.3rem;
  width: 50%;
  margin-top: 20px;
`

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  margin: 0;
  display: flex;
`
WrapperTabList.tabsRole = 'TabList'

export const WrapperTabPanel = styled(TabPanel)`
  display: none;
  min-height: 40vh;
  padding: 8px;
  margin-top: -5px;
  border: 1px solid #ccc;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);

  &.is-selected {
    display: block;
  }
`
WrapperTabPanel.tabsRole = 'TabPanel'