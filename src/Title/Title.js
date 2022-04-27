import React from 'react';
import { Helmet } from "react-helmet";

const Title = ({title}) => {
    return (
        <div>
            <Helmet>
            <title>{title} Volunteer network</title>
            </Helmet>
        </div>
    );
};

export default Title;