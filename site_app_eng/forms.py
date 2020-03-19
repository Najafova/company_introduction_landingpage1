from django import forms
# from django.forms import ModelForm, Textarea, TextInput, CharField, FileInput

class ContactForm(forms.Form):
    fullname = forms.CharField(label='search', required=True, 
                               widget=forms.TextInput(attrs={'placeholder': 'Fullname',
                                                             'class':'input'}))
    from_emaill = forms.EmailField(label='search', required=True, 
                               widget=forms.TextInput(attrs={'placeholder': 'E-mail',
                                                             'class':'input'}))
    message = forms.CharField(label='search', required=True, 
                               widget=forms.Textarea(attrs={'placeholder': 'Write your question',
                                                            'class':'textarea'}))
    # widgets = {
    #         "fullname": TextInput(attrs={"placeholder": "Adınızı qeyd edin.."}),
    #         "from_email": TextInput(attrs={"placeholder": "Soyadınızı qeyd.."}),
    #         "message": Textarea(attrs={"placeholder": "ex: animaks@gmail.com"}),

    #     }