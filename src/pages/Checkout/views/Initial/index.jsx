import LogoBlueImage from 'assets/images/logo-blue.png';
import ProductImage from 'assets/images/product.jpeg';
import { EMAIL_REGEX } from 'constants';
import {
  INITIAL_FORM_INITIAL_VALUES,
  INITIAL_FORM_TOUCHED_VALUES,
  INITIAL_FORM_UNTOUCHED_VALUES,
  PAGE_STATES,
  STATES,
} from 'pages/Checkout/constants';
import { func } from 'prop-types';
import React, { useState } from 'react';
import { checkIsFormaValuesValid } from 'utils/helpers';
import Button from 'components/Button';
import Image from 'components/Image';
import Select from 'components/Select';
import TextInput from 'components/TextInput';

const InitialView = ({ changePageState }) => {
  const [formValues, setFormValues] = useState(INITIAL_FORM_INITIAL_VALUES);
  const [formTouched, setFormTouched] = useState(INITIAL_FORM_UNTOUCHED_VALUES);

  const updateFormValue = (event) => {
    const { id, value } = event.target;
    setFormValues({ ...formValues, [id]: value });
    setFormTouched({ ...formTouched, [id]: true });
  };

  const handlePaymentButton = () => {
    setFormTouched(INITIAL_FORM_TOUCHED_VALUES);
    if (checkIsFormaValuesValid(formValues)) {
      changePageState(PAGE_STATES.PAYMENT);
    }
  };

  const voidFunction = () => {
    // empty function as a components event handler
  };

  return (
    <div id="wrapper w-100 d-block">
      <div className="container small-container">
        <div className="mobile-data w-100 d-block d-lg-none">
          <div className="checkout-logo w-100 d-block">
            <Image src={LogoBlueImage} className="m-auto d-block" />
          </div>
          <div className="cus-breadcrumb w-100 d-block">
            <ul>
              <li>Shipping</li>
              <li className="active">Payment</li>
            </ul>
          </div>
        </div>
        <div className="d-flex flex-wrap w-100">
          <div className="right-side flex-auto order-lg-1">
            <div className="right-side-top w-100 d-block">
              <div className="product-thumb">
                <span className="cart-item">1</span>
                <Image src={ProductImage} className="img-fluid" />
              </div>
              <div className="product-name w-100 d-block">Semaglutide</div>
              <div className="product-supply">1 Month Supply</div>
              <div className="product-price">
                <span>$395</span> $99.00
              </div>
            </div>
            <div className="discount-box w-100 d-block">
              <TextInput
                type="text"
                className="form-control checkout"
                placeholder="Discount code"
                onChange={voidFunction}
              />
              <Button onClick={voidFunction}>Apply</Button>
            </div>
            <div className="discount-code-btn-row">
              <ul>
                <li>
                  <Button onClick={voidFunction} className="discount-code-btn">
                    75%OFF
                  </Button>
                  <span className="code-close-btn">x</span>
                </li>
              </ul>
            </div>
            <div className="total-box-row w-100 d-block">
              <div className="data-row w-100 d-flex flex-wrap justify-content-between">
                <span>Subtotal</span> <span>$99.00</span>
              </div>
              <div className="data-row w-100 d-flex flex-wrap justify-content-between">
                <span>Shipping</span> <span>Free</span>
              </div>
              <div className="data-row w-100 d-flex flex-wrap justify-content-between total">
                <span>Total</span> <span>USD $99.00</span>
              </div>
            </div>
          </div>
          <div className="left-side flex-auto order-lg-0">
            <div className="checkout-logo w-100 d-none d-lg-block">
              <Image src={LogoBlueImage} />
            </div>
            <div className="cus-breadcrumb w-100 d-none d-lg-block">
              <ul>
                <li>Shipping</li>
                <li className="active">Payment</li>
              </ul>
            </div>
            <div className="left-top-row w-100 d-flex flex-wrap justify-content-between">
              <div className="checkout-title flex-auto">Contact</div>
              <div className="email-box w-100 d-block">
                <TextInput
                  value={formValues.email}
                  type="email"
                  id="email"
                  className="form-control checkout"
                  placeholder="Email"
                  onChange={updateFormValue}
                  isInvalid={
                    !formValues.email.match(EMAIL_REGEX) && formTouched.email
                  }
                />
                <div className="checkbox-row w-100 d-block">
                  <label className="control control-checkbox">
                    Email me with news and offers
                    <input onChange={voidFunction} type="checkbox" />
                    <div className="control-indicator"></div>
                  </label>
                </div>
              </div>
            </div>
            <div className="checkout-form-section w-100 d-block">
              <div className="checkout-title flex-auto">Shipping address</div>
              <div className="checkout-form w-100 d-block">
                <div className="row gx-3">
                  <div className="col-12">
                    <div className="form-group">
                      <Select
                        value={formValues.country}
                        onChange={updateFormValue}
                        id="country"
                        className="form-select checkout"
                        isInvalid={!formValues.country && formTouched.country}
                      >
                        <option hidden>Country</option>
                        <option
                          data-code="US"
                          data-pure-numeric-postal-code="false"
                          value="United States"
                        >
                          United States
                        </option>
                      </Select>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <TextInput
                        value={formValues.firstName}
                        type="text"
                        id="firstName"
                        className="form-control checkout"
                        placeholder="First name (optional)"
                        onChange={updateFormValue}
                        isInvalid={
                          !formValues.firstName && formTouched.firstName
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <TextInput
                        value={formValues.lastName}
                        type="text"
                        id="lastName"
                        className="form-control checkout"
                        placeholder="Last name"
                        onChange={updateFormValue}
                        isInvalid={!formValues.lastName && formTouched.lastName}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <TextInput
                        value={formValues.address}
                        type="text"
                        id="address"
                        className="form-control checkout"
                        placeholder="Address"
                        onChange={updateFormValue}
                        isInvalid={!formValues.address && formTouched.address}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <TextInput
                        value={formValues.apartment}
                        type="text"
                        id="apartment"
                        className="form-control checkout"
                        placeholder="Apartment, suite, etc. (optional)"
                        onChange={updateFormValue}
                        isInvalid={
                          !formValues.apartment && formTouched.apartment
                        }
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <TextInput
                        value={formValues.city}
                        type="text"
                        id="city"
                        className="form-control checkout"
                        placeholder="City"
                        onChange={updateFormValue}
                        isInvalid={!formValues.city && formTouched.city}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <Select
                        value={formValues.state}
                        onChange={updateFormValue}
                        id="state"
                        className="form-select checkout"
                        isInvalid={!formValues.state && formTouched.state}
                      >
                        <option hidden>State</option>
                        {STATES.map((state) => (
                          <option
                            key={state.value}
                            data-alternate-values={state.alternateValues}
                            value={state.value}
                          >
                            {state.title}
                          </option>
                        ))}
                      </Select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <TextInput
                        value={formValues.zipCode}
                        type="text"
                        id="zipCode"
                        className="form-control checkout"
                        placeholder="Zip code"
                        onChange={updateFormValue}
                        isInvalid={!formValues.zipCode && formTouched.zipCode}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <TextInput
                        value={formValues.phone}
                        type="tel"
                        id="phone"
                        className="form-control checkout"
                        placeholder="Phone"
                        onChange={updateFormValue}
                        isInvalid={!formValues.phone && formTouched.phone}
                      />
                    </div>
                  </div>
                </div>
                <div className="btn-row w-100 d-flex justify-content-end">
                  <Button
                    onClick={handlePaymentButton}
                    className="checkout-btn"
                  >
                    Continue to payment
                  </Button>
                </div>
              </div>
            </div>
            <div className="checkout-footer-link w-100 d-block">
              <a href="/#">Refund policy</a> <a href="/#">Shipping policy</a>
              <a href="/#">Privacy policy</a> <a href="/#">Terms of service</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

InitialView.propTypes = {
  changePageState: func.isRequired,
};

export default InitialView;
