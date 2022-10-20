import React from 'react'
import { Input } from '../components/input/Input'
import { Label } from '../components/Label/Label'
import { Button } from '../components/button/Button'
import { Navbar } from '../components/navbar/Navbar'
import { Hr } from '../components/hr/Hr'

export const NewReview = () => {
  return (
   <div>
    <Navbar/>
            <br/>
            <h1>Agregar Revisión</h1>
            <Hr/>
    <div className="card-body py-5 px-md-5">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-8">
          <form className="pb-3">
            <div className="form-group">
              <Input
                name={'title'}
                type={'text'} />
              <Label> Título del artículo</Label>
            </div>
            <br />
            <div className="form-group">
              <Input
                name={'magazine'}
                type={'text'}/>
              <Label>Revista o congreso</Label>
            </div>
            <br />
            <div className="form-group">
              <Input
                name={'file'}
                type={'file'}/>
            </div>
            <br />
            <Button type='submit'>Guardar</Button>
          </form>
         
        </div>
      </div>
    </div>
    </div>
  )
}
