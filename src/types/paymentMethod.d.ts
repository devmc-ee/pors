import React from 'react';

export interface PaymentMethod {
	type: string;
	name: string;
	description: string;
	icon: JSX.Element | null;
}

export interface PaymentMethodButton extends PaymentMethod {
	onClick: () => void;
}
