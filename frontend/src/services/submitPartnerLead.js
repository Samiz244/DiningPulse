import { supabase } from '../lib/supabase'

export async function submitPartnerLead(formData) {
  const { restaurantName, contactName, email, phone, restaurantType, locations, notes } = formData

  if (!restaurantName || !contactName || !email) {
    return { success: false, error: 'Restaurant name, contact name, and email are required.' }
  }

  const { error } = await supabase.from('partner_leads').insert([
    {
      restaurant_name: restaurantName,
      contact_name: contactName,
      email,
      phone: phone || null,
      restaurant_type: restaurantType || null,
      locations: locations ? parseInt(locations, 10) : null,
      notes: notes || null,
    },
  ])

  if (error) {
    return { success: false, error: error.message }
  }

  return { success: true, message: "Thanks! We'll be in touch soon." }
}
