import { useRouter } from 'next/router';
import { Tab } from 'semantic-ui-react';

import { Info, Settings } from '../../components/Account';
import { Separator } from '../../components/Shared/Separator';
import { BasicLayout } from '../../layouts';
import { useAuth } from '../../hooks';

import styles from './account.module.scss';

export default function AccountPage() {
	const { user, logout } = useAuth();
	const router = useRouter();

	if (!user) {
		router.push('/');
		return null;
	}

	const panes = [
		{
			menuItem: 'Mis pedidos',
			render: () => (
				<Tab.Pane attached={false}>
					<p>Mis pedidos...</p>
				</Tab.Pane>
			),
		},
		{
			menuItem: 'Lista de deseos',
			render: () => (
				<Tab.Pane attached={false}>
					<p>Mis listas de deseos...</p>
				</Tab.Pane>
			),
		},
		{
			menuItem: 'Direcciones',
			render: () => (
				<Tab.Pane attached={false}>
					<p>Mis direcciones...</p>
				</Tab.Pane>
			),
		},
		{
			menuItem: { key: 20, icon: 'settings', content: 'Ajustes' },
			render: () => (
				<Tab.Pane attached={false} key={99}>
					<Settings.ChangeNameForm />
					<div className={styles.containerForm}>
						<Settings.ChangeEmailForm />
						<Settings.ChangePasswordForm />
					</div>
					<Separator height={80} />
				</Tab.Pane>
			),
		},
		{
			menuItem: {
				key: 21,
				icon: 'log out',
				content: '',
				onClick: logout,
			},
		},
	];

	return (
		<BasicLayout isContainer relative>
			<Info />
			<Tab
				menu={{ secondary: true, pointing: true }}
				panes={panes}
				className={styles.tabs}
			/>
		</BasicLayout>
	);
}
