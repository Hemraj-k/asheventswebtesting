import React from 'react';
import '../../Styles/Footer.css';
import Footer from 'react-footer-comp';

function FooterPart() {
  return (
    <div className="footer">
      <Footer
        copyrightIcon
        years={[2022]}
        height={150}
        bgColor={'#560019'}
        copyrightText
        copyrightIconStyle={{ color: 'white', fontSize: 20, marginRight: 10 }}
        copyrightTextStyle={{ color: 'white', fontSize: 20, marginRight: 10 }}
        textStyle={{ color: 'yellow', fontSize: 16, marginRight: 10 }}
        text={'All rights reserved.'}
      />
    </div>
  );
}

export default FooterPart;
