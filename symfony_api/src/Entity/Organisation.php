<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\OrganisationRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: OrganisationRepository::class)]
#[ApiResource()]
class Organisation
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?bool $etat = null;

    #[ORM\Column(length: 255)]
    private ?string $name_organisation = null;

    #[ORM\Column(length: 255, nullable: true)]
    private ?string $type_organisation = null;

    #[ORM\Column(length: 255)]
    private ?string $description = null;

    #[ORM\Column(length: 255)]
    private ?string $logo = null;

    #[ORM\Column(length: 255)]
    private ?string $adresse = null;

    #[ORM\Column(length: 255)]
    private ?string $cp = null;

    #[ORM\Column(length: 255)]
    private ?string $city = null;

    #[ORM\Column(length: 255)]
    private ?string $country = null;

    #[ORM\Column(length: 255)]
    private ?string $url_website = null;

    #[ORM\Column(length: 255)]
    private ?string $email = null;

    #[ORM\Column(length: 255)]
    private ?string $tel = null;

    #[ORM\OneToMany(mappedBy: 'organisation_publish', targetEntity: Concours::class)]
    private Collection $concours_publish;

    #[ORM\ManyToMany(targetEntity: user::class, inversedBy: 'organisation')]
    private Collection $user;

    #[ORM\OneToMany(mappedBy: 'organisation', targetEntity: Annonce::class)]
    private Collection $annonce;

    #[ORM\OneToMany(mappedBy: 'concours', targetEntity: ConcoursOrganisation::class)]
    private Collection $concoursOrganisation;

    public function __construct()
    {
        $this->concours = new ArrayCollection();
        $this->concours_publish = new ArrayCollection();
        $this->user = new ArrayCollection();
        $this->annonce = new ArrayCollection();
        $this->concoursOrganisation = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function isEtat(): ?bool
    {
        return $this->etat;
    }

    public function setEtat(bool $etat): self
    {
        $this->etat = $etat;

        return $this;
    }

    public function getNameOrganisation(): ?string
    {
        return $this->name_organisation;
    }

    public function setNameOrganisation(string $name_organisation): self
    {
        $this->name_organisation = $name_organisation;

        return $this;
    }

    public function getTypeOrganisation(): ?string
    {
        return $this->type_organisation;
    }

    public function setTypeOrganisation(?string $type_organisation): self
    {
        $this->type_organisation = $type_organisation;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getLogo(): ?string
    {
        return $this->logo;
    }

    public function setLogo(string $logo): self
    {
        $this->logo = $logo;

        return $this;
    }

    public function getAdresse(): ?string
    {
        return $this->adresse;
    }

    public function setAdresse(string $adresse): self
    {
        $this->adresse = $adresse;

        return $this;
    }

    public function getCp(): ?string
    {
        return $this->cp;
    }

    public function setCp(string $cp): self
    {
        $this->cp = $cp;

        return $this;
    }

    public function getCity(): ?string
    {
        return $this->city;
    }

    public function setCity(string $city): self
    {
        $this->city = $city;

        return $this;
    }

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(string $country): self
    {
        $this->country = $country;

        return $this;
    }

    public function getUrlWebsite(): ?string
    {
        return $this->url_website;
    }

    public function setUrlWebsite(string $url_website): self
    {
        $this->url_website = $url_website;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getTel(): ?string
    {
        return $this->tel;
    }

    public function setTel(string $tel): self
    {
        $this->tel = $tel;

        return $this;
    }

    /**
     * @return Collection<int, Concours>
     */
    public function getConcoursPublish(): Collection
    {
        return $this->concours_publish;
    }

    public function addConcoursPublish(Concours $concoursPublish): self
    {
        if (!$this->concours_publish->contains($concoursPublish)) {
            $this->concours_publish->add($concoursPublish);
            $concoursPublish->setOrganisationPublish($this);
        }

        return $this;
    }

    public function removeConcoursPublish(Concours $concoursPublish): self
    {
        if ($this->concours_publish->removeElement($concoursPublish)) {
            // set the owning side to null (unless already changed)
            if ($concoursPublish->getOrganisationPublish() === $this) {
                $concoursPublish->setOrganisationPublish(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, user>
     */
    public function getUser(): Collection
    {
        return $this->user;
    }

    public function addUser(user $user): self
    {
        if (!$this->user->contains($user)) {
            $this->user->add($user);
        }

        return $this;
    }

    public function removeUser(user $user): self
    {
        $this->user->removeElement($user);

        return $this;
    }

    /**
     * @return Collection<int, Annonce>
     */
    public function getAnnonce(): Collection
    {
        return $this->annonce;
    }

    public function addAnnonce(Annonce $annonce): self
    {
        if (!$this->annonce->contains($annonce)) {
            $this->annonce->add($annonce);
            $annonce->setOrganisation($this);
        }

        return $this;
    }

    public function removeAnnonce(Annonce $annonce): self
    {
        if ($this->annonce->removeElement($annonce)) {
            // set the owning side to null (unless already changed)
            if ($annonce->getOrganisation() === $this) {
                $annonce->setOrganisation(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, ConcoursOrganisation>
     */
    public function getConcoursOrganisation(): Collection
    {
        return $this->concoursOrganisation;
    }

    public function addConcoursOrganisation(ConcoursOrganisation $concoursOrganisation): self
    {
        if (!$this->concoursOrganisation->contains($concoursOrganisation)) {
            $this->concoursOrganisation->add($concoursOrganisation);
            $concoursOrganisation->setConcours($this);
        }

        return $this;
    }

    public function removeConcoursOrganisation(ConcoursOrganisation $concoursOrganisation): self
    {
        if ($this->concoursOrganisation->removeElement($concoursOrganisation)) {
            // set the owning side to null (unless already changed)
            if ($concoursOrganisation->getConcours() === $this) {
                $concoursOrganisation->setConcours(null);
            }
        }

        return $this;
    }
}
