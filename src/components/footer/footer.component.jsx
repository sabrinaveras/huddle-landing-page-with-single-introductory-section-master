import React from "react";

import { Footer, SocialNetworks } from "./footer.styles";

// images
import { ReactComponent as FacebookImage } from "../../assets/images/facebook-f.svg";
import { ReactComponent as Twitter } from "../../assets/images/twitter.svg";
import { ReactComponent as Instagram } from "../../assets/images/instagram.svg";

const FooterComponent = () => (

    <Footer>

        <SocialNetworks>
            <FacebookImage/>
        </SocialNetworks>

        <SocialNetworks>
            <Twitter/>
        </SocialNetworks>

        <SocialNetworks>
            <Instagram/>
        </SocialNetworks>

    </Footer>
)

export default FooterComponent;