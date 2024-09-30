
export function configHeaderItem
    ({ title, value, sortable, width, align }:
        { title: string, value: string, sortable: boolean, width: string, align?: any }) {
    return {
        title: title,
        align: align,
        value: value,
        sortable: sortable,
        width: width,
        class: 'header-style'
    }
}