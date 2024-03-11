import { IThemeAssetContributor } from '../ThemeAssetContributor';
import { AppConsts } from '@shared/AppConsts';

export class Theme5ThemeAssetContributor implements IThemeAssetContributor {
    public getAssetUrls(): string[] {
        return [AppConsts.appBaseUrl + '/assets/fonts/fonts-asap-condensed.min.css'];
    }

    public getAdditionalBodyStyle(): string {
        return '';
    }

    public getMenuWrapperStyle(): string {
        return '';
    }

    public getSubheaderStyle(): string {
        return 'subheader-title text-dark font-weight-bold my-1 me-3';
    }

    public getFooterStyle(): string {
        return 'footer pt-10 pb-5 d-flex flex-column flex-md-row flex-stack';
    }
}
