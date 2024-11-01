export interface Menu {
    header?: string;
    title?: string;
    icon?: string;
    to?: string;
    chip?: string;
    chipBgColor?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: Menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
}

const sidebarItem: Menu[] = [
    { header: 'Home' },
    {
        title: 'Contas',
        icon: 'mdi-account-multiple-outline',
        to: '/Contas'
    },
    {
        title: 'Contatos',
        icon: 'mdi-account-multiple-outline',
        to: '/Contatos'
    },
    {
        title: 'Zonas',
        icon: 'mdi-account-multiple-outline',
        to: '/Zonas'
    },
    {
        title: 'Atividades',
        icon: 'mdi-account-multiple-outline',
        to: '/Atividades'
    }
];

export default sidebarItem;
