module Api
  class ContactsController < ApplicationController
   
    def create
      contact = Contact.new(contact_params)
      if contact.save
        # 保存に成功した場合の処理（例えば、メール送信など）
        render json: { status: 'success', message: 'Contact was successfully created.' }, status: :created
      else
        # 保存に失敗した場合の処理
        render json: { status: 'error', message: contact.errors.full_messages.to_sentence }, status: :unprocessable_entity
      end
    end

    private

    # ストロングパラメーターを設定
    def contact_params
      params.require(:contact).permit(:name, :email, :message)
    end
  end
end
