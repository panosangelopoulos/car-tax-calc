import React from 'react'
import styled from 'styled-components'
import {
  Header,
  HeaderName,
  DatePicker,
  DatePickerInput,
  NumberInput,
} from 'carbon-components-react'

import { LogoGithub16 } from '@carbon/icons-react'

import { checkCarTaxType, checkCO2Tax } from './utils'

import 'carbon-components/css/carbon-components.min.css'

const ContentArea = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;

  margin-top: 4em;

  .bx--date-picker {
    width: 100%;
  }

  .bx--date-picker-container {
    margin-left: auto;
    margin-right: auto;
  }

  .bx--date-picker,
  .bx--date-picker--single,
  .bx--date-picker__input {
    width: 100% !important;
  }

  .bx--form-item {
    width: 100%;
    min-width: 328px;
  }

  .bx--number {
    min-width: 328px;
    margin-left: auto;
    margin-right: auto;
  }
`

const FieldWrapper = styled.div`
  margin: 20px;
`

const FooterText = styled.div`
  margin: 0 2em;

  display: flex;
  align-items: center;
`

const App = () => {
  const [date, setDate] = React.useState()
  const [cc, setCC] = React.useState(null)
  const [co2, setCO2] = React.useState(null)

  const isCC = date < new Date('2010-11-01')
  const isCo2 = date >= new Date('2010-11-01')

  const taxesFromCC = isCC && checkCarTaxType(date, cc)
  const taxesFromCO2 = isCo2 && checkCO2Tax(co2)

  if (cc > 10000) {
    alert('Ο υπολογισμός για τα συγκεκριμένα κυβικά είναι αδύνατος!')
    window.location.href = 'https://www.youtube.com/watch?v=vmXw4cJsESQ'
  }

  return (
    <div
      className="App"
      style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Header aria-label="Τέλη κυκλοφορίας 2020">
        <HeaderName href="#" prefix="2020">
          Τέλη κυκλοφορίας
        </HeaderName>
      </Header>
      <ContentArea>
        <h5>Υπολογισμός των τελών κυκλοφορίας (2020)</h5>
        <FieldWrapper>
          <DatePicker
            datePickerType="single"
            dateFormat="m/Y"
            value={date}
            onChange={(eventOrDates) => {
              const value = eventOrDates.target
                ? eventOrDates.target.value
                : eventOrDates[0]
              setDate(value)
            }}
          >
            <DatePickerInput
              id="date-picker-input-id"
              labelText={
                'Επιλέξτε την ημερομηνία ταξινόμησης του οχήματός σας.'
              }
              locale="gr"
              placeholder={`πχ. 07/2012`}
            />
          </DatePicker>
        </FieldWrapper>

        {isCC && (
          <>
            <FieldWrapper>
              <NumberInput
                id="cc-input"
                helperText="Αναφέρεται τον κυβισμό του οχήματός σας."
                invalidText="Ο αριθμός των κυβικών σας είναι σωστός! Επιλέξτε έναν αριθμό από 0 έως 10000."
                label="Επιλέξτε τον κινητήρα του αυτοκινήτου (σε cc.)."
                max={10000}
                min={0}
                step={1}
                value={cc}
                onChange={(e) => setCC(e.target.value)}
                placeholder={1200}
              />
            </FieldWrapper>

            {taxesFromCC && (
              <FieldWrapper>
                Το συνολικό κόστος των τελών σας είναι
                <strong> {taxesFromCC}€</strong>
              </FieldWrapper>
            )}
          </>
        )}

        {isCo2 && (
          <>
            <FieldWrapper>
              <NumberInput
                id="co2-input"
                invalidText="Ο αριθμός των ρύπων δεν ειναι σωστός! Επιλέξτε έναν αριθμό από 0 έως 250."
                label="Επιλέξτε την ποσότητα εκπομπής ρύπων (CO2)."
                max={1000}
                min={0}
                step={1}
                value={co2}
                onChange={(e) => setCO2(e.target.value)}
                placeholder={134}
              />
            </FieldWrapper>

            {taxesFromCO2 && (
              <FieldWrapper>
                Το συνολικό κόστος των τελών σας είναι
                <strong> {taxesFromCO2}€</strong>
              </FieldWrapper>
            )}
          </>
        )}
      </ContentArea>

      <FooterText>
        <LogoGithub16 />:
        <a
          href="https://github.com/panosangelopoulos/car-tax-calc"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/panosangelopoulos/car-tax-calc
        </a>
      </FooterText>
    </div>
  )
}

export default App
