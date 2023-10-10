import React from 'react'
import {ListsView, AddNewListFormDisplay} from '@reactui/lists'
import {ListDetailView, ListItemView, AddNewListItemFormDisplay} from '@reactui/list-items'
import {LogoutButton} from '@reactui/login'
import {DashboardContainer} from './dashboard-container'
import { DashboardToolBar } from './dashboard-toolbar'
import {DashboardListPanel} from './dashboard-list-panel'
import {DashboardCenterPanel} from './dashboard-center-panel'
import { AllListsProvider } from '@reactui/contexts'
import {SelectedListProvider} from '@reactui/contexts'



export const Dashboard = () => {
    return(
        <>
            <DashboardToolBar children = {<LogoutButton />} />
            <DashboardContainer>
                <AllListsProvider>
                    <DashboardListPanel children = {
                        <>
                            <ListsView />
                            <AddNewListFormDisplay />
                        </>
                        
                    
                        }
                    />
                </AllListsProvider>
                <DashboardCenterPanel children = {
                        <ListDetailView />
                    } 
                />
                <SelectedListProvider>
                    <DashboardListPanel children = {
                        <>
                            <ListItemView />
                            <AddNewListItemFormDisplay/>
                        </>
                        
                    
                        } 
                    />
                </SelectedListProvider>
                
            </DashboardContainer>
        </>
    )
}




