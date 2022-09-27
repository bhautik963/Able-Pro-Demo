'use strict';
import { Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FuseNavigationService } from '../../layout/admin/navigation/navigation.service';

@Injectable()
export class PermissionService implements OnInit {
    url: string;
    permissions: any;
    displaySidebar = [];
    hidden = false;
    items: any;
    displayAllNav: any = [];
    displayTrialTools: any;
    ristrictedUrl: any = [];

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private _fuseNavigationService: FuseNavigationService
    ) {
        this.activatedRoute.url.subscribe(activeUrl => {
            this.url = window.location.pathname;
        });
    }

    ngOnInit() { }

    showHideMenuItem(items): void {
        console.log(items);

        this.items = items;
        /** Get all navigations */
        let getMainNavigation = this._fuseNavigationService.getNavigation('main');
        let newItems: any
        if (this.items.length >= 1) {
            this.items.map((singleItems: any) => {
                if (singleItems === "CRM") {
                    singleItems = "dashboard"
                }
                if (singleItems === "Users") {
                    singleItems = "user-management"
                }
                if (singleItems === "Kathika") {
                    singleItems = "kathikalist"
                }
                if (singleItems === "Kindom") {
                    singleItems = "kingdomlist"
                }
                if (singleItems === "LeaderBoard Kindom-Ranking") {
                    singleItems = "klist"
                }
                if (singleItems === "LeaderBoard Warrior-Ranking") {
                    singleItems = "wlist"
                }
                if (singleItems === "Yantra Probability") {
                    singleItems = "yantralist"
                }
                if (singleItems === "Yantra Reward") {
                    singleItems = "reward"
                }
                if (singleItems === "Bages Bages-List") {
                    singleItems = "Badgeslist"
                }
                if (singleItems === "Bages Season-List") {
                    singleItems = "Seasonlist"
                }
                if (singleItems === "Level User-Level") {
                    singleItems = "ulist"
                }
                if (singleItems === "Level Stadium-Level") {
                    singleItems = "slist"
                }
                if (singleItems === "Palnet Character") {
                    singleItems = "planetCharecterlist"
                }
                if (singleItems === "Palnet") {
                    singleItems = "Planetlist"
                }
                if (singleItems === "Battle History") {
                    singleItems = "battlelist"
                }
                if (singleItems === "App Purchase Gems") {
                    singleItems = "gemslist"
                }
                if (singleItems === "App Purchase Gold") {
                    singleItems = "goldlist"
                }
                if (singleItems === "App Purchase Daily Reward") {
                    singleItems = "dailyrewardlist"
                }
                if (singleItems === "App Purchase Yantra") {
                    singleItems = "yantralist"
                }
                if (singleItems === "App Purchase Card") {
                    singleItems = ""
                }
                if (singleItems === "Code Redeem") {
                    singleItems = "codeRedeemlist"
                }
                if (singleItems === "Code Redeem Reward") {
                    singleItems = "codeRedeemRewardlist"
                }
                if (singleItems === "MasterCard") {
                    singleItems = "mastercardlist"
                }
                if (singleItems === "Quest") {
                    singleItems = "questlist"
                }
                if (singleItems === "Card Level Up") {
                    singleItems = "cardleveluplist"
                }
                if (singleItems === "User Card") {
                    singleItems = "usercardlist"
                }
                if (singleItems === "User Reward") {
                    singleItems = "userrewardlist"
                }
                // User Reward
                if (singleItems === "Ai Logic Ai-Deck") {
                    singleItems = "aidecklist"
                }
                if (singleItems === "Ai Logic Ai-Deck-Picker") {
                    singleItems = "aideckpickerlist"
                }
                if (singleItems === "Constant") {
                    singleItems = "constant"
                }
                if (singleItems === "Upload Attachment") {
                    singleItems = "upload"
                }
                if (singleItems === "Setting") {
                    singleItems = "settings"
                }

                /** Configuration if no permissions but try to send request without permissions page display error page  */
                getMainNavigation.map(singleNavigation => {
                    if (singleNavigation.title === 'Trial Tool') {
                        singleNavigation.children.map(singleToolItem => {
                            if (singleItems == singleToolItem.id) {
                                if (singleToolItem.url === this.url) {
                                    this.router.navigate(['errors/error-404']);
                                }
                            }
                        })
                    } else {
                        if (singleItems == singleNavigation.id) {
                            if (singleNavigation.url === this.url) {
                                this.router.navigate(['errors/error-404']);
                            }
                        }
                    }
                })

                /** Function for hide navigations if all permissions of module restricted */
                this._fuseNavigationService.updateNavigationItem(singleItems, {
                    hidden: true
                });
                newItems.push(singleItems)

            })

            /** Function for Show navigations if at lease one permission in module */
            let test = this._fuseNavigationService
            let visiblePermission = getMainNavigation.filter(function (el) {
                if (el.id === "trial-tool") {
                    el.children.filter((children) => {
                        if (newItems.indexOf(children.id) < 0) {
                            test.updateNavigationItem(children.id, {
                                hidden: false
                            });
                            // return el
                        };
                    })
                } else {
                    if (newItems.indexOf(el.id) < 0) {
                        test.updateNavigationItem(el.id, {
                            hidden: false
                        });
                        // return el
                    };
                }
            });
        } else {
            /** If no any module restricted view all navigations */
            let getData = this._fuseNavigationService.getNavigation('main');
            getData.map(displayNav => {
                if (displayNav.id === "trial-tool") {
                    displayNav.children.map((singleTrialToolChildren: any) => {
                        if (this.displayTrialTools.indexOf(singleTrialToolChildren.id) === -1) {
                            this.displayTrialTools.push(singleTrialToolChildren.id);
                        }
                    })
                }
                if (this.displayAllNav.indexOf(displayNav.id) === -1) {
                    this.displayAllNav.push(displayNav.id);
                }
            })
            this.displayAllNav.map(singleNavItem => {
                this._fuseNavigationService.updateNavigationItem(singleNavItem, {
                    hidden: false
                });
            })
            this.displayTrialTools.map(singleTrialToolNavItem => {
                this._fuseNavigationService.updateNavigationItem(singleTrialToolNavItem, {
                    hidden: false
                });
            })
        }
    }
}