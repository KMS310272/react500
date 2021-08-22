import React from 'react';
import Header from '../layout/Header';
import Layout from '../layout/Layout';
import Title from '../basics/Title';
function Script(){
    return (

        <>
        <Header />
        <Layout>
            <section id="scriptCont">
                <div className="container">
                    <div className="wrap__title">
                    <Title  text={["Script", "site"]} />
                    </div>
                    <div className="srcipt__cont"></div>
                </div>
            </section>
        </Layout>
       </>
    
);
}

export default Script;