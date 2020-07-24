import { parse } from 'querystring'
import pathRegexp from 'path-to-regexp'

const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+(?::\d+)?|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/;
export const isUrl = path => reg.test(path);
export const isAntDesignPro = () => {
    if (ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site') {
        return true;
    }

    return window.location.hostname === 'preview.pro.ant.design'
};

export const isAntDesignProOrDev = () => {
    const { NODE_ENV } = process.env;

    if (NODE_ENV === 'development') {
        return true;
    }

    return isAntDesignPro();
}

export const getPageQuery = () => parse(window.location.href.split('?')[1]);
/**
 * props.route.routes
 * @param router [{}]
 * @param pathname string
 */

export const getAuthorityFromRouter = (router = [], pathname) => {
    const authority = router.find(({ routes, path = '/', target = '_self' }) =>
        (path && target !== '_blank' && pathRegexp(path).exec(pathname)) ||
        (routes && getAuthorityFromRouter(routes, pathname)),
    );

    if(authority) return authority;
    return undefined;
}

export const getRouteAuthority = (path, routeData) => {
    let authorities;
    routeData.forEach(route=>{
        if(pathRegexp(`${route.path}/(.*)`).test(`${path}/`)){
            if(route.authority){
                authorities = route.authority;
            }

            if(route.path === path){
                authorities = route.authority || authorities;
            }

            if(route.routes){
                authorities = getRouteAuthority(path, route.routes) || authorities;
            }
        }
    })
}