import DoctorLetterForm from '@/components/doctorLetterForm'
import IllnessForm from '@/components/illnessForm'
import TestResultsForm from '@/components/testResultsForm'
import React from 'react'


export default function Page() {
  return (
    <div>
      <IllnessForm/>
        <DoctorLetterForm/> 
             <TestResultsForm/>
    </div>
  )
}
