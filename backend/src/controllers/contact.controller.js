import contactService from "../services/contact.service.js";

class ContactController {
  async getContact(req,res,next){try{const r=await contactService.getContact();return res.status(r.statusCode).json(r)}catch(e){next(e)}}
  async getById(req,res,next){try{const r=await contactService.getContactById(req.params.id);return res.status(r.statusCode).json(r)}catch(e){next(e)}}
  async create(req,res,next){try{const r=await contactService.createContact(req.body);return res.status(r.statusCode).json(r)}catch(e){next(e)}}
  async update(req,res,next){try{const r=await contactService.updateContact(req.params.id,req.body);return res.status(r.statusCode).json(r)}catch(e){next(e)}}
  async upsert(req,res,next){try{const r=await contactService.upsertContact(req.body);return res.status(r.statusCode).json(r)}catch(e){next(e)}}
  async delete(req,res,next){try{const r=await contactService.deleteContact(req.params.id);return res.status(r.statusCode).json(r)}catch(e){next(e)}}
  async exists(req,res,next){try{const r=await contactService.exists();return res.status(r.statusCode).json(r)}catch(e){next(e)}}
  async count(req,res,next){try{const r=await contactService.count();return res.status(r.statusCode).json(r)}catch(e){next(e)}}
  async updateImage(req,res,next){try{const r=await contactService.updateImage(req.params.id,req.file);return res.status(r.statusCode).json(r)}catch(e){next(e)}}
  async clearImage(req,res,next){try{const r=await contactService.clearImage(req.params.id);return res.status(r.statusCode).json(r)}catch(e){next(e)}}
  async updatePhone(req,res,next){try{const r=await contactService.updatePhone(req.params.id,req.body);return res.status(r.statusCode).json(r)}catch(e){next(e)}}
  async updateWhatsapp(req,res,next){try{const r=await contactService.updateWhatsapp(req.params.id,req.body);return res.status(r.statusCode).json(r)}catch(e){next(e)}}
}
export default new ContactController();
