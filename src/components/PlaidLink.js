// APP COMPONENT
// Upon rendering of App component, make a request to create and
// obtain a link token to be used in the Link component
import React, { useEffect, useState } from 'react';
import { usePlaidLink } from 'react-plaid-link';
const PlaidLink = () => {
    const [linkToken, setLinkToken] = useState(null);
    const generateToken = async () => {
        const response = await fetch('/api/create_link_token', {
            method: 'POST',
        });
        const data = await response.json();
        setLinkToken(data.link_token);
    };
    useEffect(() => {
        generateToken();
    }, []);

    return linkToken != null ? <Link linkToken={linkToken} /> : <></>;
};
// LINK COMPONENT
// Use Plaid Link and pass link token and onSuccess function
// in configuration to initialize Plaid Link

const Link = (props) => {
    const onSuccess = React.useCallback(async (public_token, metadata) => {
        // send public_token to server
        const response = await fetch('/api/set_access_token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ public_token }),
        });
        // Handle response ...
        const accessToken = await response.json();
        // TODO: Store access token in db

    }, []);
    const config = {
        token: props.linkToken,
        receivedRedirectUri: null,
        onSuccess,
    };
    const { open, ready } = usePlaidLink(config);
    return (
        <button onClick={() => open()} disabled={!ready}>
            Link account
        </button>
    );
};
export default PlaidLink;