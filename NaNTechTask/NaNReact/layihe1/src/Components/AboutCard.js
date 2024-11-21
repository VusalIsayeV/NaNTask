import React from 'react'
import '../Style/AboutCard.css'
export default function AboutCard() {
    return (
        <section className="py-0">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-3 row-cols-xl-3 justify-content-center px-4">
                    <div className="px-2">
                        <div className="col mb-5 ">
                            <div className="card bg-dark">
                                <img className="card-img-top" src="https://png.pngtree.com/background/20231030/original/pngtree-d-illustration-of-adventure-ready-black-suv-isolated-on-black-background-picture-image_5812043.jpg" alt="..." />
                                <div className="card-body">
                                    <div className="text-center">
                                        <h3 className="text-center text-white">Suv</h3>
                                        <p className="text-white">Sport utility vehicle, SUV və ya yolsuzluq avtomobili (az: idman təyinatlı avtonəqliyyat) həm çəkmə qabiliyyətinə, həm də pikap yük avtomobili xüsusiyyətinə sahib bir avtonəqliyyat vasitəsidir. Nəqliyyat vasitəsi həm mikroavtobus, həm də station wagon xüsusiyyətlərini özündə birləşdirir. Bundan əlavə, asfalt olmayan ərazilərdə də hərəkət edə bilər.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className="col mb-5 ">
                            <div className="card bg-dark">
                                <img className="card-img-top" src="https://png.pngtree.com/background/20231030/original/pngtree-elegant-black-sedan-for-work-and-family-use-in-3d-illustration-picture-image_5784255.jpg" alt="..." />
                                <div className="card-body">
                                    <div className="text-center">
                                        <h3 className="text-center text-white">Sedan</h3>
                                        <p className="text-white">Sedan — minik maşının baqaj hissəsi salonundan ayrılmış, adətən iki və ya üç tamölçülü oturacaqlar sırası olan və avtomobillərdə ən geniş istifadə olunan ban növü.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-2">
                        <div className="col mb-5 ">
                            <div className="card bg-dark">
                                <img className="card-img-top" src="https://png.pngtree.com/background/20231016/original/pngtree-d-illustration-of-premium-city-car-black-minivan-ideal-for-business-picture-image_5583286.jpg" alt="..." />
                                <div className="card-body">
                                    <div className="text-center">
                                        <h3 className="text-center text-white">Miniven</h3>
                                        <p className="text-white">Mikrofurqon, Miniven, çoxməqsədli nəqliyyat vasitəsi, çoxməqsədli avtomobil, çoxməqsədli maşın və ya MPV şəxsi məqsədlərdə istifadə üçün nəzərdə tutulmuş olan furqon növüdür. Minivenlər adətən tək və ya cüt qutu formasında dizayn edilirlər və maksimum daxili həcmi təmin edirlər. Onlar adətən sedanlardan, hetçbeklərdən və sivilərdən daha hündür olurlar.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
