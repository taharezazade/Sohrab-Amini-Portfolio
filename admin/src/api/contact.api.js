import api from "@/api/axios";
import { CONTACT_ENDPOINTS } from "@/api/endpoints";

const contactApi = {
  get: () => api.get(CONTACT_ENDPOINTS.GET),
  create: payload => api.post(CONTACT_ENDPOINTS.CREATE, payload),
  update: payload => api.put(CONTACT_ENDPOINTS.UPDATE, payload),
  updateImage: (id, file) => {
    const fd = new FormData();
    fd.append("image", file);
    return api.patch(CONTACT_ENDPOINTS.UPDATE_IMAGE(id), fd);
  },
  clearImage: id => api.delete(CONTACT_ENDPOINTS.CLEAR_IMAGE(id)),
};
export default contactApi;
