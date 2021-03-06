import React from 'react';

export interface PaymentMethod {
	type: string;
	name: string;
	description: string;
}

export interface PaymentMethodButton extends PaymentMethod {
	onClick: () => void;
}
