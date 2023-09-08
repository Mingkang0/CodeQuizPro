import { CreateAnimation, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { home, person, settings } from 'ionicons/icons';
import Home from '../pages/Home';
import Tab2 from '../pages/Tab2';
import Tab3 from '../pages/Tab3';
import { useRef } from "react";
import { useEffect, useState } from "react";
import { Redirect, Route } from "react-router";
import '../theme/tabbar.css'
interface Tab {
    label: string;
    url: string;
    icon: string;
    color: string;
    backgroundColor: string;
    component: React.ComponentType<any>;
}

const TabBar: React.FC = () => {
    const [activeTab, setActiveTab] = useState("tab0");
    const switchRefs = useRef<(CreateAnimation | null)[]>([]);

    const tabs: Tab[] = [
        {
            label: "Home",
            url: "/home",
            icon: home,
            color: "#76b140",
            backgroundColor: "#ddf7c5",
            component: Home
        },
        {
            label: "Profile",
            url: "/profile",
            icon: person,
            color: "#e46062",
            backgroundColor: "#fcddde",
            component: Tab2
        },
        {
            label: "Settings",
            url: "/settings",
            icon: settings,
            color: "#3578e5",
            backgroundColor: "#e7f0ff",
            component: Tab3
        }
    ];

    const revealAnimation = {
        property: "transform",
        fromValue: "translateX(-30px)",
        toValue: "translateX(0px)"
    };

    const switchAnimation = {
        duration: 200,
        direction: undefined, // Change direction to undefined
        iterations: 1,
        fromTo: [revealAnimation],
        easing: "ease-in-out"
    };

    const getTabButtonStyle = (tab: Tab) => {
        const tabStyle = {
            backgroundColor: tab.backgroundColor,
            color: tab.color,
            margin: '2px',
            borderRadius: '100px',
            transition: "0.5s all ease-in-out"
        };
        return tabStyle;
    }

    useEffect(() => {
        const tabIndex = parseInt(activeTab.match(/\d+/)![0], 10);
        switchRefs.current[tabIndex]?.animation?.play();
    }, [activeTab]);

    return (
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    {tabs.map((tab, index) => (
                        <Route key={index} exact path={tab.url}>
                            <tab.component />
                        </Route>
                    ))}
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                </IonRouterOutlet>
                <IonTabBar slot="bottom" onIonTabsDidChange={e => setActiveTab(e.detail.tab || "")}>
                    {tabs.map((tab, index) => {
                        const tabStyle = getTabButtonStyle(tab);
                        const isActive = activeTab === `tab${index}`;
                        return (
                            <IonTabButton key={index} style={isActive ? tabStyle : {}} tab={`tab${index}`} href={tab.url} >
                                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <IonIcon icon={tab.icon} style={{ fontSize: '24px' }} />
                                    {isActive && (
                                        <CreateAnimation ref={ref => (switchRefs.current[index] = ref)} {...switchAnimation}>
                                            <IonLabel style={{ fontSize: '14px', marginLeft: '6px' }}>{tab.label}</IonLabel>
                                        </CreateAnimation>
                                    )}
                                </div>
                            </IonTabButton>
                        );
                    })}
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    );
}

export default TabBar;
