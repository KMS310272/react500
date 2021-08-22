import React from 'react';
import Header from '../layout/Header';
import Layout from '../layout/Layout';
import Title from '../basics/Title';
import FooterInfo from '../basics/FooterInfo';
import Loading from '../basics/Loading';
import ReferInfo from '../pages/Referinfo';
import axios from 'axios';

class Reference extends React.Component {
    state = {
        isLoading: true,
        refers: [],
    }

    getRerfer = async () => {
        const {
            data: {
                data: { htmlRefer },
            }
        } = await axios.get("https://webstoryboy.github.io/react10000/src/refer.json");
        //async 과 awa
        this.setState({ htmlRefer, isLoading: false });
        console.log(htmlRefer);
    }

    componentDidMount(){
        setTimeout(()=>{
            this.getRerfer();
        },2000)
    }

    render(){
        const { isLoading, htmlRefer } = this.state;
        return (
            <div id="wrap">
                {isLoading ? (
                    <Loading />
                ) : (
                    <div>
                        <Header />
                        <Layout>
                            <section id="referCont">
                                <div className="container">
                                    <Title text={["reference", "book"]} />
                                    <div className="refer__cont">
                                        <div className="refer-table">
                                            <h3>HTML</h3>
                                            <ul>
                                                {htmlRefer.map((refer) => (
                                                    <ReferInfo 
                                                        key= {refer.id}
                                                        id={refer.id}
                                                        title={refer.title}
                                                        desc1={refer.desc1}
                                                        desc2={refer.desc2}
                                                        desc2={refer.desc2}
                                                        element={refer.element}
                                                        tag={refer.tag}
                                                        version={refer.version}
                                                        use={refer.use}
                                                        definition={refer.definition}
                                                        />
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Layout>
                        <FooterInfo />
                    </div>
                )}
            </div>
        )
    }
}





// function Reference(){
//     return ( 
//         <>
//             <Header />
//             <Layout>
//                 <section id="referCont">
//                     <div className="container">
//                         <Title text={["Reference", "book"]} />  
//                         <div className="refer__cont"></div>
//                     </div>
//                 </section>
//             </Layout>
//         </>
//     );
// }

export default Reference;