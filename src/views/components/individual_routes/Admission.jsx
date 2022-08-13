import React from 'react'

function Admission() {
  return (
    <div className='w-full flex justify-center'>
      <div className='max-w-[1440] w-full'>
        <div className='grid lg:grid-cols-4'>
          <div className='col-span-3 m-2 lg:m-4'>
            <div className='space-y-4 w-full'>
              <h1 className='bg-primary font-bold text-white w-full p-4'>Indian Institute of Management (IIM), Bangalore Admission</h1>
              <p className='font-semibold'>Admission Procedure of IIM Bangalore</p>
              <p>IIM Bangalore Courses offer various programs at the postgraduate level.
                These programs include Postgraduate Program in Enterprise
                Management (PGPEM), Postgraduate Program in Public Policy and
                Management (PGPPM), and Executive Postgraduate Program in
                Management (EPGP). There is another program offered at the
                research level i.e. Fellow Program in Management (FPM).</p>
              <p>
                <strong>For PGP : </strong>

                Candidates seeking admission to PGP are shortlisted based on candidates' performance in CAT examination conducted at the national level.
                Shortlisted candidates are intimated via email for Personal Interview round conducted at the institute.
                Before getting admission, the candidates are required to appear in and qualify Written Ability Test (WAT) on any of the topics provided by IIM Bangalore.
                After having qualified WAT, the candidates are shortlisted for interview round.
                Candidates must visit institute's official website to gather more information.
              </p>
              <p>
                <strong>For PGPEM : </strong>

                Candidates with a valid score in CAT/GMAT/GRE are eligible to apply for admission to PGPEM.
                The candidates are, then, shortlisted for a personal interview and WAT rounds conducted at the institute.
                The candidates are intimated via emails.
                Candidates with a valid score in IIM Bangalore Test are also elig8ible to apply for admission.
                The candidates are finally shortlisted based on their academic performance, work experience, and performance in the interview and WAT rounds.
              </p>
            </div>
          </div>

          {/* grid 2 */}
          <div className='hidden lg:block col-span-1 m-4'>
            <div className='shadow-md p-4 bg-white '>
              ads or anything
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admission