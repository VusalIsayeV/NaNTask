import React, { useState } from 'react'
import AboutCompIn from './AboutCompIn'

function AboutComp() {
    // const [Baza, setBaza] = useState()
    const Baza=[
        {
            id:1,
            header: "Toast Header",
            content: "Mercedes-Benz — 1926-cı ildə Almaniyada əsası qoyulan avtomobil şirkəti.Almaniya tərəfindən istehsal olunub və istehsal üçün müəyyən miqdarda büdcə ayırlıb.2022-ci ilədək Mercedes milyonlarla maşın istehsal edib."
        },
        {
            id:2,
            header: "Toast Header",
            content: "Mercedes-Benz — 1926-cı ildə Almaniyada əsası qoyulan avtomobil şirkəti.Almaniya tərəfindən istehsal olunub və istehsal üçün müəyyən miqdarda büdcə ayırlıb.2022-ci ilədək Mercedes milyonlarla maşın istehsal edib."
        },
        {
            id:3,
            header: "Toast Header",
            content: "Mercedes-Benz — 1926-cı ildə Almaniyada əsası qoyulan avtomobil şirkəti.Almaniya tərəfindən istehsal olunub və istehsal üçün müəyyən miqdarda büdcə ayırlıb.2022-ci ilədək Mercedes milyonlarla maşın istehsal edib."
        },
        {
            id:4,
            header: "Toast Header",
            content: "Mercedes-Benz — 1926-cı ildə Almaniyada əsası qoyulan avtomobil şirkəti.Almaniya tərəfindən istehsal olunub və istehsal üçün müəyyən miqdarda büdcə ayırlıb.2022-ci ilədək Mercedes milyonlarla maşın istehsal edib."
        },
        {
            id:5,
            header: "Toast Header",
            content: "Mercedes-Benz — 1926-cı ildə Almaniyada əsası qoyulan avtomobil şirkəti.Almaniya tərəfindən istehsal olunub və istehsal üçün müəyyən miqdarda büdcə ayırlıb.2022-ci ilədək Mercedes milyonlarla maşın istehsal edib."
        },
        {
            id:6,
            header: "Toast Header",
            content: "Mercedes-Benz — 1926-cı ildə Almaniyada əsası qoyulan avtomobil şirkəti.Almaniya tərəfindən istehsal olunub və istehsal üçün müəyyən miqdarda büdcə ayırlıb.2022-ci ilədək Mercedes milyonlarla maşın istehsal edib."
        }
    ]
    console.log(Baza);
    return (
        <div className="col-10">
            <div className="row">
                {
                    Baza.map(x => {
                        return <AboutCompIn cont={x} key={x.id}/>
                    })
                }
            </div>
        </div>
    )
}


export default AboutComp