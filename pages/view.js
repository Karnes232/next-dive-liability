import { db } from '@/Firebase/config'
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

const View = () => {
  const [liabilityForms, setLiabilityForms] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'liability'))
      
      querySnapshot.forEach((doc) => {
        let data = doc.data()
        data.id = doc.id
        setLiabilityForms([...liabilityForms, data])
      })
    }
    fetchData().catch(console.error)
    
  }, [])
  console.log(liabilityForms)
  return (
    <div>
      {liabilityForms.map((form, index ) => {
			return (
        <div key={index} className='flex w-96'>
          <a href={form.url}><div>{form.id}</div></a>
          
        </div>
      );
		})}
    </div>
  )
}

export default View