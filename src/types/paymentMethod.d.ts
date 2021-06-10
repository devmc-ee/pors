import React from 'react';

export interface PaymentMethod {
	type: string;
	name: string;
	description: string;
	icon: JSX.Element | null;
}
