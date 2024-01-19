import express from 'express'
import {StatusCodes} from 'http-status-codes'
import Job from '../models/JobModel.js'
import { NotFoundError } from '../errors/customErrors.js'

export const getAllJobs = async(req,res)=>{
    const jobs = await Job.find({})
    res.status(StatusCodes.OK).json({jobs})
}

export const createJob = async(req, res) => {
  const job = await Job.create(req.body)
  
  res.status(StatusCodes.CREATED).json({ job });
};


export const getJob = async(req,res)=>{
    const{id} = req.params
    const job = await Job.findById(id)
    if(!job) throw new NotFoundError(`no job found with id ${id}`)
    res.status(StatusCodes.OK).json({job})
    
}

export const editJob = async(req, res) => {
    const {id} = req.params
      const updatedJob = await Job.findByIdAndUpdate(id,req.body,{new:true})
      if(!updatedJob) throw new NotFoundError(`no job found with id ${id}`)
       res.status(StatusCodes.OK).json({ updatedJob });
    }


 export const deleteJob = async (req, res) => {
      const { id } = req.params;
      const removedJob = await Job.findByIdAndDelete(id)
      if(!job) throw new NotFoundError(`no job found with id ${id}`)
      res.status(StatusCodes.OK).json({ msg: "job deleted", removedJob:removedJob });
    };

 