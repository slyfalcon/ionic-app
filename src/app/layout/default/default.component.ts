import {
    Component,
    Injector,
    OnInit,
    OnDestroy,
    ViewEncapsulation,
} from '@angular/core';
import {
    NavigationEnd,
    RouteConfigLoadStart,
    NavigationError,
    NavigationCancel,
} from '@angular/router';
import { AppControl } from '@core';

@Component({
    selector: 'layout-default',
    templateUrl: './default.component.html',
    styleUrls: [`./default.component.scss`],
    encapsulation: ViewEncapsulation.None,
})
export class LayoutDefaultComponent extends AppControl
    implements OnInit, OnDestroy {
    isFetching = false;

    constructor(protected injector: Injector) {
        super(injector);

        // scroll to top in change page
        this.freeData.route = this.route.events.subscribe(evt => {
            if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
                this.isFetching = true;
            }
            if (
                evt instanceof NavigationError ||
                evt instanceof NavigationCancel
            ) {
                this.isFetching = false;
                if (evt instanceof NavigationError) {
                    this.noticeSrv.msgInfo(`无法加载${evt.url}路由`);
                }
                return;
            }
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
        });
    }

    ngOnInit() {
        super.ngOnInit();
    }

    ngOnDestory() {
        super.ngOnDestroy();
    }
}
